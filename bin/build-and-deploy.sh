#!/bin/bash

# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: GPL-3.0-or-later

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

# shellcheck disable=SC1091
. .env.deploy

rm -r dist
npm run build

scp -r dist/1maiprogram/browser "$DEPLOY_USER"@"$DEPLOY_SERVER":www.new
