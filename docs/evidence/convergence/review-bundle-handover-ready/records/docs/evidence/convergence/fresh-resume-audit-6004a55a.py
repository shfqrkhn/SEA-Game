from pathlib import Path
import hashlib
import json
import re
import subprocess
import sys

here = Path(__file__).resolve().parent
root = here.parents[2]
manifest = json.loads((here / "candidate-manifest-6004a55a.json").read_text(encoding="utf-8-sig"))
assert manifest["result"] == "PASS"
assert manifest["key"] == "6004a55a7debbc343a420468d975a29badb176ec23f04602d03185b47229eaf2"
basis = manifest["basis"]
files = basis["files"]

hashes = {}
for name, expected_hash in files.items():
    path = root / name
    assert path.is_file(), f"missing manifest file: {name}"
    actual_hash = hashlib.sha256(path.read_bytes()).hexdigest()
    assert actual_hash == expected_hash, f"hash mismatch: {name}"
    hashes[name] = actual_hash

snapshot_roots = {
    "windows": Path("/mnt/c/Users/user/AppData/Local/Temp/SEA-Game-candidate-reset-final-win-cf906dbe34624c79beeb0898560ec46a"),
    "wsl": Path("/mnt/c/Users/user/AppData/Local/Temp/SEA-Game-candidate-reset-final-wsl-6c2cb575254f43349265b16446554980"),
}
snapshot_checks = {}
for name, snapshot_root in snapshot_roots.items():
    checked = 0
    for relative_path, expected_hash in files.items():
        candidate_path = snapshot_root / relative_path
        assert candidate_path.is_file(), f"{name} snapshot missing: {relative_path}"
        actual_hash = hashlib.sha256(candidate_path.read_bytes()).hexdigest()
        assert actual_hash == expected_hash, f"{name} snapshot mismatch: {relative_path}"
        checked += 1
    snapshot_checks[name] = {"fileCount": checked, "result": "PASS"}

def git_paths(*args):
    output = subprocess.check_output(["git", *args, "-z"], cwd=root)
    return {item for item in output.decode().split("\0") if item}

def excluded(name):
    return (
        name.startswith("docs/evidence/convergence/")
        or name.startswith("docs/evidence/audit-runs/")
        or name == "docs/evidence/document-receipt.json"
    )

expected = git_paths("ls-files") | git_paths("ls-files", "--others", "--exclude-standard")
expected = {name for name in expected if not excluded(name)}
symlinks = set()
for folder in ("source", "assets", ".github", "docs", "tools"):
    base = root / folder
    if not base.exists():
        continue
    for path in base.rglob("*"):
        if path.is_symlink():
            symlinks.add(path.relative_to(root).as_posix())
        elif path.is_file():
            name = path.relative_to(root).as_posix()
            if not excluded(name):
                expected.add(name)
unlisted = sorted(expected - set(files))
extra = sorted(set(files) - expected)
assert not unlisted and not extra, {"unlisted": unlisted, "extra": extra}
assert not symlinks, sorted(symlinks)

provenance = json.loads((root / "docs/reference/provenance.json").read_text(encoding="utf-8"))
reference_checks = {}
for name, record in provenance["files"].items():
    digest = hashlib.sha256((root / name).read_bytes()).hexdigest()
    assert digest == record["sha256"] == files[name], name
    reference_checks[name] = digest

rules = json.loads((root / "docs/evidence/rules-baseline.json").read_text(encoding="utf-8"))
pool_counts = {name: len(entries) for name, entries in rules["pools"].items()}
assert sum(pool_counts.values()) == 70
assert pool_counts == {
    "CAPACITY": 7, "MOBILITY": 7, "FIREPOWER": 7, "PROTECTION": 7,
    "COMMS": 7, "SA": 7, "ACCESSORIES": 7, "SE_PROCESS": 21,
}

mpes = (root / "docs/MPES.md").read_text(encoding="utf-8")
requirements = sorted(set(map(int, re.findall(r"^\| R(\d{2}) \|", mpes, re.M))))
tests = sorted(set(map(int, re.findall(r"^\| T(\d{2}) \|", mpes, re.M))))
weights = list(map(int, re.findall(r"^\| M\d - .*?\| (\d+)% \|", mpes, re.M)))
assert requirements == list(range(1, 27)), requirements
assert tests == list(range(1, 28)), tests
assert len(weights) == 9 and sum(weights) == 100, weights
assert "D13" in (root / "docs/PROJECT_ANALYSIS.md").read_text(encoding="utf-8")
assert "W13" in (root / "docs/EXECUTION_LEDGER.md").read_text(encoding="utf-8")
assert "RETIRED" in mpes and "100% of the accepted MPES release scope" in mpes

head = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=root, text=True).strip()
assert head == basis["gitHead"], {"head": head, "manifestHead": basis["gitHead"]}

report = {
    "result": "PASS",
    "method": "fresh Python standard-library hash and inventory audit",
    "key": manifest["key"],
    "fileCount": len(files),
    "snapshotReproductions": snapshot_checks,
    "controlledFileCounts": {
        folder: sum(name.startswith(folder + "/") for name in files)
        for folder in ("source", "assets", ".github", "docs", "tools")
    },
    "unlistedMaterialFiles": len(unlisted),
    "extraManifestFiles": len(extra),
    "symlinks": sorted(symlinks),
    "referenceFilesVerified": len(reference_checks),
    "rulePoolCounts": pool_counts,
    "requirementCount": len(requirements),
    "testCount": len(tests),
    "milestoneWeights": weights,
    "gitHead": head,
    "environment": basis["environment"],
}
print(json.dumps(report, indent=2))
