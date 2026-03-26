#!/bin/bash

# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: GPL-3.0-or-later

set -euo pipefail

"$(dirname "$0")"/npm-install-if-needed.sh

npx ng test --watch=false
