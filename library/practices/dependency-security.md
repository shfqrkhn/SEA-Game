# Dependency security

A repository can pin an older vulnerable package even when a vetted catalogue already lists its patched release. Monorepos can also keep separate lockfiles below the root.

## Sweep and update

1. Enumerate every committed dependency manifest and lockfile, including nested applications and workspaces.
2. Run the package manager's audit from each lockfile root and record the affected package, version range, severity and patched release.
3. Update the project's exact direct pin to the patched release and regenerate its lockfile with the package manager. Do not hand-edit transitive lock entries.
4. Review the lock diff to confirm only the intended package family and its necessary transitive updates changed.
5. Re-run the audit from every lockfile root. Require zero findings before merge; use CI for the repository's normal quality gates.

## Evidence

Record the initial finding and the clean post-update audit in the version's verification record. If no fixed release exists, keep the finding visible and document the affected runtime path and mitigation rather than suppressing the advisory.
