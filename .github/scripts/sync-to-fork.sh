#!/usr/bin/env bash
set -euo pipefail

BRANCH="${1:?branch required}"
REMOTE="${2:?remote required}"

# Upstream-only workflows — fork PAT often lacks `workflow` scope
UPSTREAM_ONLY_WORKFLOWS=(
  ".github/workflows/release.yml"
)

git checkout -B "fork-sync-${BRANCH}" "${BRANCH}"

for file in "${UPSTREAM_ONLY_WORKFLOWS[@]}"; do
  if git ls-files --error-unmatch "$file" >/dev/null 2>&1; then
    git rm -f "$file"
  fi
done

if ! git diff --cached --quiet; then
  git commit -m "chore(sync): exclude upstream-only workflows from fork"
fi

git push -f "${REMOTE}" "fork-sync-${BRANCH}:${BRANCH}"
