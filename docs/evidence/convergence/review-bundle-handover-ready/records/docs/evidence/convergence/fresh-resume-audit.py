from pathlib import Path
import hashlib
import json
import re
import subprocess

root = Path('/mnt/d/VSCode/SEA-Game/current')
manifest = json.loads((root / 'docs/evidence/convergence/candidate-manifest-1eee0307.json').read_text(encoding='utf-8-sig'))
assert manifest['result'] == 'PASS'
basis = manifest['basis']
files = basis['files']
hashes = {name: hashlib.sha256((root / name).read_bytes()).hexdigest() for name in files if (root / name).is_file()}
missing = sorted(set(files) - set(hashes))
mismatched = sorted(name for name, digest in hashes.items() if digest != files[name])
assert not missing and not mismatched, {'missing': missing, 'mismatched': mismatched}

def git_paths(*args):
    data = subprocess.check_output(['git', *args, '-z'], cwd=root)
    return {value for value in data.decode().split('\0') if value}

tracked = git_paths('ls-files')
untracked = git_paths('ls-files', '--others', '--exclude-standard')
expected = tracked | untracked

def excluded(name):
    return name.startswith('docs/evidence/convergence/') or name.startswith('docs/evidence/audit-runs/') or name == 'docs/evidence/document-receipt.json'

expected = {name for name in expected if not excluded(name)}
for folder in ('source', 'assets', '.github', 'docs', 'tools'):
    base = root / folder
    if base.exists():
        expected.update(path.relative_to(root).as_posix() for path in base.rglob('*') if path.is_file() and not excluded(path.relative_to(root).as_posix()))
unlisted = sorted(expected - set(files))
extra = sorted(set(files) - expected)
assert not unlisted and not extra, {'unlisted': unlisted, 'extra': extra}

provenance = json.loads((root / 'docs/reference/provenance.json').read_text(encoding='utf-8'))
reference_mismatches = []
for name, record in provenance['files'].items():
    digest = hashlib.sha256((root / name).read_bytes()).hexdigest()
    if digest != record['sha256'] or files.get(name) != digest:
        reference_mismatches.append(name)
assert not reference_mismatches, reference_mismatches

rules = json.loads((root / 'docs/evidence/rules-baseline.json').read_text(encoding='utf-8'))
pool_counts = {name: len(items) for name, items in rules['pools'].items()}
assert sum(pool_counts.values()) == 70
assert pool_counts == {'CAPACITY': 7, 'MOBILITY': 7, 'FIREPOWER': 7, 'PROTECTION': 7, 'COMMS': 7, 'SA': 7, 'ACCESSORIES': 7, 'SE_PROCESS': 21}
mpes = (root / 'docs/MPES.md').read_text(encoding='utf-8')
requirements = sorted(set(map(int, re.findall(r'^\| R(\d{2}) \|', mpes, re.M))))
tests = sorted(set(map(int, re.findall(r'^\| T(\d{2}) \|', mpes, re.M))))
assert requirements == list(range(1, 27)), requirements
assert tests == list(range(1, 28)), tests
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip()
assert head == basis['gitHead'], {'head': head, 'manifestHead': basis['gitHead']}

print(json.dumps({
    'result': 'PASS',
    'key': manifest['key'],
    'fileCount': len(files),
    'controlledFileCounts': {folder: sum(name.startswith(folder + '/') for name in files) for folder in ('source', 'assets', '.github', 'docs', 'tools')},
    'unlistedMaterialFiles': len(unlisted),
    'extraManifestFiles': len(extra),
    'referenceFilesVerified': len(provenance['files']),
    'rulePoolCounts': pool_counts,
    'requirementCount': len(requirements),
    'testCount': len(tests),
    'gitHead': head,
    'environment': basis['environment'],
}, indent=2))
