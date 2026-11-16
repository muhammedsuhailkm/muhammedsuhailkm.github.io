#!/bin/bash
# Builds the React app into a single HTML file and publishes it as ../index.html
# (the page GitHub Pages serves). Run from anywhere: ./app/build.sh
set -e
cd "$(dirname "$0")"

[ -d node_modules ] || pnpm install
[ -f .parcelrc ] || echo '{ "extends": "@parcel/config-default", "resolvers": ["parcel-resolver-tspaths", "..."] }' > .parcelrc

rm -rf dist .parcel-cache
pnpm exec parcel build index.html --dist-dir dist --no-source-maps
pnpm exec html-inline dist/index.html > dist/bundle.html

# Finish the head after inlining: the inliner tries to read every linked file
# from disk, so links to files outside the app (favicon, web fonts) go in here.
# The charset is repeated first because it must sit in the first 1024 bytes,
# ahead of the inlined stylesheet.
python3 - <<'PY'
import re
page = open("dist/bundle.html", encoding="utf-8").read()
extra = '<meta charset="UTF-8">\n' + open("head-extra.html", encoding="utf-8").read().strip() + "\n"
page, count = re.subn(r"(<html[^>]*>)", lambda m: m.group(1) + extra, page, count=1)
assert count == 1, "could not find <html> in the bundle"
open("../index.html", "w", encoding="utf-8").write(page)
PY
echo "Wrote ../index.html ($(du -h ../index.html | cut -f1))"
