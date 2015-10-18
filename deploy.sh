#!/bin/bash

confirm () {
  read -r -p "${1:-Are you sure? [y/N]} " response
  case $response in
    [yY][eE][sS]|[yY])
      true
      ;;
    *)
      false
      ;;
  esac
}

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

printf "${RED}You're about to deploy!${NC}\n"
confirm "Surely you can't be serious? [y/N]" || exit 1;

printf "Running dev build...\n"
brunch b || { printf "${RED}dev build failed :(${NC}\n" ; exit 1; }
printf "${GREEN}done${NC}\n"

printf "Running tests...\n"
npm run test-single || { printf "${RED}test failed :(${NC}\n" ; exit 1; }
printf "${GREEN}done${NC}\n"

printf "Running prod build...\n"
brunch b -P || { printf "${RED}build failed :(${NC}\n"; exit 1; }
printf "${GREEN}done${NC}\n"

confirm "Move files and commit to gh-pages? [y/N]" && (
  printf "creating temp directory..."
  mkdir ../orodarius-public
  printf " ${GREEN}done${NC}\n"

  printf "moving built files to temp directory..."
  cp -r public/* ../orodarius-public/
  printf " ${GREEN}done${NC}\n"

  printf "cheking out gh-pages..."
  git checkout gh-pages || { printf "${RED}can't checkout to gh-pages, make sure working directory is clean!\n"; exit 1; }
  printf " ${GREEN}done${NC}\n"

  printf "moving built files from temp directory..."
  cp -r ../orodarius-public/* .
  printf " ${GREEN}done${NC}\n"

  printf "committing updates..."
  git add .
  git commit -m "updated release"
  printf " ${GREEN}done${NC}\n"

  confirm "Do you want to push to github? [y/N]" && (
    printf "pushing to origin..."
    git push origin gh-pages
    printf "${GREEN}done${NC}\n"
  )
)

printf "checking out master..."
git checkout master
printf " ${GREEN}done${NC}\n"

printf "removing temp directory..."
rm -rf ../orodarius-public
printf " ${GREEN}done${NC}\n"

printf "${GREEN}Finished!${NC}\n"
