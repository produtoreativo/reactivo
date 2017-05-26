#!/bin/bash -e

yarn run release

rm -fr lib
mkdir lib

yarn run build
yarn run build-umd
yarn run build-min

cp build/static/css/main.*.css lib/reactivo.css
cp build/static/css/main.*.css.map lib/reactivo.css.map
