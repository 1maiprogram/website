#!/bin/bash

set -euo pipefail

"$(dirname "$0")"/npm-install-if-needed.sh

npx ng test --watch=false
