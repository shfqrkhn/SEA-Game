"""Preserve originals and encode reviewed imagegen outputs; no pixel painting/resizing.

Vector fallbacks are traced from the repaired image with vtracer, not raster-backed SVGs.
"""
from pathlib import Path
import hashlib, json, shutil, sys
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
REVIEW = ROOT / 'docs/evidence/convergence/art-border-review-20261008'
OUT = ROOT / 'docs/evidence/convergence/art-border-repair-20261008'
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()

def prepare():
    OUT.mkdir(parents=True, exist_ok=True)
    queue = []
    for row in json.loads((REVIEW/'findings.json').read_text())['assets']:
        if not row['findings']: continue
        identity = row['identity'].removesuffix('.webp')
        for ext in ['.webp', '.svg']:
            src = ROOT/'assets/v1'/f'{identity}{ext}'
            backup = OUT/'originals'/f'{identity}{ext}'
            backup.parent.mkdir(parents=True, exist_ok=True)
            if not backup.exists(): shutil.copy2(src, backup)
        assert sha(OUT/'originals'/f'{identity}.webp') == row['sha256']
        observations = '; '.join(f['observation'] for f in row['findings'])
        scene = identity.startswith('cards/SE-')
        prompt = (f'Precise artwork repair of SEA Game {identity}. Findings: {observations}. '
          'Remove unwanted white edge borders, grid dividers and fragments from neighboring panels. '
          'Restore any missing focal subject edges, antennas, barrels or equipment through coherent reconstruction. '
          'Preserve the original subject identity, recognizable geometry, component count, arrangement, colors, realistic detail and lighting. '
          + ('Preserve the meaning and relationships of this systems-engineering scene/diagram, its symbols, chart structure and intentional contextual composition. Keep all focal icons and equipment complete. Do not remove intentional diagram lines or add new labels. ' if scene else
             'Show the complete standalone equipment/vehicle with all protrusions and cables visible. Blend the hard portrait-panel backdrop seamlessly into a continuous matching beige studio background. ')
          + 'Use one opaque wide 3:1 landscape canvas with generous safe margins around all focal content. No grid sheet, no neighboring assets, no new objects or text. Do not crop tighter. Clean coherent realistic game artwork.')
        queue.append({'identity':identity,'input':str(OUT/'originals'/f'{identity}.webp'),'inputSha256':row['sha256'],'findings':row['findings'],'prompt':prompt})
    (OUT/'queue.json').write_text(json.dumps(queue,indent=2),encoding='utf-8')
    print(json.dumps(queue))

def encode(identity, generated):
    import vtracer
    source = Path(generated)
    keep = OUT/'generated'/f'{identity}.png'
    keep.parent.mkdir(parents=True,exist_ok=True)
    shutil.copy2(source,keep)
    target = ROOT/'assets/v1'/identity
    with Image.open(keep) as image:
        image.load()
        assert image.mode in ('RGB','RGBA'), image.mode
        w,h = image.size
        assert abs(w/h-3)<0.01, f'Unexpected aspect {w}x{h}'
        image.save(target.with_suffix('.webp'),format='WEBP',lossless=True,exact=True)
        with Image.open(target.with_suffix('.webp')) as encoded:
            assert image.convert('RGBA').tobytes()==encoded.convert('RGBA').tobytes()
    vtracer.convert_image_to_svg_py(str(keep),str(target.with_suffix('.svg')),colormode='color',hierarchical='stacked',mode='polygon',filter_speckle=24,color_precision=6,layer_difference=16,length_threshold=6,path_precision=0)
    svg = target.with_suffix('.svg').read_text(encoding='utf-8')
    import re
    svg = re.sub(r'<svg\b[^>]*>',f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{identity.split("/")[-1]} detailed vector artwork">',svg,count=1)
    svg = svg[svg.index('<svg '):].strip()+'\n'
    target.with_suffix('.svg').write_text(svg,encoding='utf-8',newline='\n')
    record = {'identity':identity,'generatedPngSha256':sha(keep),'webpSha256':sha(target.with_suffix('.webp')),'svgSha256':sha(target.with_suffix('.svg')),'dimensions':[w,h],'encoding':'lossless WebP; decoded RGBA equals generated PNG; no resize/crop/paint','vector':'vtracer 0.6.15 polygon trace; color precision 6, speckle 24, layer difference 16, length threshold 6, path precision 0; visual review required','svgBytes':target.with_suffix('.svg').stat().st_size}
    record['canonicalSvgNormalization']=True
    print(json.dumps(record))
    (OUT/'encodings').mkdir(exist_ok=True)
    (OUT/'encodings'/f'{identity.replace("/","-")}.json').write_text(json.dumps(record,indent=2),encoding='utf-8')

def sync():
    for receipt in sorted((OUT/'receipts').glob('*.json')):
        item=json.loads(receipt.read_text(encoding='utf-8'))
        existing=OUT/'encodings'/f'{item["identity"].replace("/","-")}.json'
        if existing.exists():
            previous=json.loads(existing.read_text(encoding='utf-8'))
            if previous['generatedPngSha256']==sha(Path(item['path'])) and 'color precision 6' in previous['vector'] and previous.get('canonicalSvgNormalization'): continue
        encode(item['identity'],item['path'])

if __name__=='__main__':
    if sys.argv[1]=='prepare': prepare()
    elif sys.argv[1]=='encode': encode(sys.argv[2],sys.argv[3])
    elif sys.argv[1]=='sync': sync()
