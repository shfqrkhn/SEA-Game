"""Decode the optional raster pack and inspect external/embedded SVG safety.

QA-only dependency: Pillow. This does not approve appearance or distribution rights.
Pass --embedded for a JSON mapping extracted from each role's canonical SVG table.
"""
import argparse
import base64
import hashlib
import io
import json
import math
from pathlib import Path
import re
import xml.etree.ElementTree as ET

import PIL
from PIL import Image


def sha(data):
    return hashlib.sha256(data).hexdigest()


def inspect_svg(data):
    root = ET.fromstring(data)
    assert root.tag == '{http://www.w3.org/2000/svg}svg', 'invalid SVG root'
    box = [float(value) for value in root.attrib['viewBox'].split()]
    assert len(box) == 4 and all(math.isfinite(value) for value in box) and box[2] > 0 and box[3] > 0, 'invalid viewBox'
    rasters = []
    for node in root.iter():
        tag = node.tag.rsplit('}', 1)[-1].lower()
        assert tag not in ('script', 'foreignobject'), 'executable SVG content'
        for name, value in node.attrib.items():
            local = name.rsplit('}', 1)[-1].lower()
            assert not local.startswith('on'), 'SVG event handler'
            if local in ('href', 'src'):
                if value.startswith('#'):
                    continue
                assert tag == 'image' and value.startswith('data:image/webp;base64,'), 'external SVG resource'
                image = base64.b64decode(value.split(',', 1)[1], validate=True)
                with Image.open(io.BytesIO(image)) as decoded:
                    decoded.load()
                    assert decoded.format == 'WEBP', 'non-WebP embedded raster'
                rasters.append(sha(image))
            if local == 'style':
                for target in re.findall(r'url\s*\((.*?)\)', value, re.I):
                    assert target.strip().strip('"\'').startswith('#'), 'external style resource'
    return {'viewBox': box, 'kind': 'raster-backed' if rasters else 'vector', 'rasterHashes': rasters}


def audit(root, embedded_files, source_files):
    expected = {f'cards/{prefix}-{letter}' for prefix in ('ACC', 'CAP', 'COM', 'FP', 'MOB', 'PRO', 'SA') for letter in 'ABCDEFG'}
    expected |= {f'cards/SE-{letter}' for letter in 'ABCDEFGHIJKLMNOPQRSTU'}
    expected |= {'practice/TRAIN-CAP'}
    expected |= {f'vehicles/{name}' for name in ('combat', 'command-post', 'mine-clearing', 'recce', 'recovery', 'troop-carrier')}
    found = {p.relative_to(root).with_suffix('').as_posix() for p in root.rglob('*.webp')}
    vectors = {p.relative_to(root).with_suffix('').as_posix() for p in root.rglob('*.svg')}
    assert found == vectors == expected, '77 identity/path mapping differs'
    rows = []
    for identity in sorted(expected):
        raster = (root / (identity + '.webp')).read_bytes()
        with Image.open(io.BytesIO(raster)) as image:
            assert image.format == 'WEBP', identity
            image.load()
            width, height = image.size
            assert width > 0 and height > 0, identity
        vector = (root / (identity + '.svg')).read_bytes()
        info = inspect_svg(vector)
        assert all(value == sha(raster) for value in info['rasterHashes']), identity + ': SVG raster differs'
        assert abs(info['viewBox'][2] / info['viewBox'][3] - width / height) < 0.001, identity + ': aspect ratio differs'
        rows.append({'identity': identity, 'width': width, 'height': height, 'webpSha256': sha(raster), 'svgSha256': sha(vector), **info})
    embedded = []
    ids = {identity.split('/')[-1] for identity in expected}
    for path in embedded_files + source_files:
        raw = path.read_bytes()
        if path in source_files:
            match = re.search(r'const BUILTIN_CARD_ART=Object\.freeze\((\{[^\n]+\})\);', raw.decode('utf-8'))
            assert match, str(path) + ': missing canonical embedded table'
            table = json.loads(match.group(1))
        else:
            table = json.loads(raw)
        assert set(table) == ids, str(path) + ': embedded identity mismatch'
        types = {}
        for identity, svg in table.items():
            asset_identity = next(value for value in expected if value.split('/')[-1] == identity)
            assert svg.strip() == (root / (asset_identity + '.svg')).read_text(encoding='utf-8').strip(), identity + ': stale embedded vector'
            kind = inspect_svg(svg.encode('utf-8'))['kind']
            types[kind] = types.get(kind, 0) + 1
        table_bytes = json.dumps(table, sort_keys=True, ensure_ascii=False, separators=(',', ':')).encode('utf-8')
        embedded.append({'input': str(path), 'sha256': sha(raw), 'tableSha256': sha(table_bytes), 'count': len(table), 'types': types})
    return {'result': 'PASS', 'scope': '77 decoded raster/SVG paths and supplied embedded tables; no visual/rights/browser acceptance', 'pillowVersion': PIL.__version__, 'assets': rows, 'embedded': embedded}


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--root', type=Path, default=Path('assets/v1'))
    parser.add_argument('--embedded', type=Path, nargs='*', default=[])
    parser.add_argument('--source', type=Path, nargs='*', default=[])
    args = parser.parse_args()
    print(json.dumps(audit(args.root, args.embedded, args.source), indent=2))
