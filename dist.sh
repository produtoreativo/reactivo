#!/bin/bash -e

npm run release

rm -fr lib
mkdir lib

npm run build
npm run build-umd
npm run build-min

cp build/static/css/main.*.css lib/reactivo.css
cp build/static/css/main.*.css.map lib/reactivo.css.map
