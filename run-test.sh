#!/usr/bin/env bash
set -euo pipefail

if [ "${1:-}" = "" ]; then
  echo "Usage: $0 <exercise-name>" >&2
  echo "Example: $0 namefile" >&2
  exit 1
fi

exercise_name="${1%.js}"
test_url="https://raw.githubusercontent.com/01-edu/public/master/js/tests/${exercise_name}_test.js"

runner="${TEST_RUNNER:-}"

if [ -z "$runner" ]; then
  if [ -f "./test.mjs" ]; then
    runner="./test.mjs"

  fi
fi

if [ -z "$runner" ]; then
  echo "Error: could not find test.mjs, test.cjs, or test.cjm in this folder." >&2
  echo "Set TEST_RUNNER to the path of your test runner, for example:" >&2
  echo "  TEST_RUNNER=/path/to/test.mjs $0 $exercise_name" >&2
  exit 1
fi

node "$runner" "." "$exercise_name" "$test_url"
