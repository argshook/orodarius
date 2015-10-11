#!/bin/bash

echo "Running dev build"
brunch b || { echo "dev build failed :(" ; exit 1; }

echo "Running tests"
npm run test-single || { echo "test failed :(" ; exit 1; }

echo "Running prod build"
brunch b -P || { echo "build failed :("; exit 1; }

echo "Creating temp directory"
mkdir ../orodarius-public

echo "Moving built files to temp directory"
cp -r public/* ../orodarius-public/

echo "Cheking out gh-pages"
git checkout gh-pages

echo "Moving built files from temp directory"
cp -r ../orodarius-public/* .

echo "Committing updates"
git add .
git commit -m "updated release"

echo "Pushing to origin"
git push origin gh-pages
git checkout master

echo "Removing temp directory"
rm -rf ../orodarius-public

echo "Done!"
