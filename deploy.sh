#!/bin/bash

mkdir ../orodarius-public
cp -r public/* ../orodarius-public/
git checkout gh-pages
cp -r ../orodarius-public/* .
# git add .
# git commit -m "updated release"
# git push origin gh-pages
# git checkout master
# echo "Done!"
# rm -rf ../orodarius-public
