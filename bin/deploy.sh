#!/bin/sh

get_git_branch() {
  echo "$(git symbolic-ref --short -q HEAD 2>/dev/null)"
}

pull_from_git() {
  git fetch origin
  reset="git reset --hard origin/"
  reset_branch="$reset$1"
  eval ${reset_branch}

  . ./bin/parse_env.sh
  ./bin/dcup.sh dev -d --build
}


run_on_development() {
  git fetch origin
  reset="git reset --hard origin/"
  reset_branch="$reset$1"
  eval "${reset_branch}"

  . ./bin/parse_env.sh
  ./bin/dcup.sh local -d
}

run_on_production() {
  . ./bin/parse_env.sh
  ./bin/dcup.sh prod -d
}

run_on_local() {
  . ./bin/parse_env.sh
  ./bin/dcup.sh local -d
}

branch=$1
if [ -z "${branch}" ]; then
  branch="$(get_git_branch)"
fi

if [ ${branch} = "development" ]; then
  run_on_development "${branch}"
elif [ ${branch} = "main" ]; then
  run_on_production "${branch}"
elif [ ${branch} = "local" ]; then
  run_on_local
fi
