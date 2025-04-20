#!/bin/bash

# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: GPL-3.0-or-later

# Wrapper script to let a test pass on commits from before a specific
# test script was added.

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

if [[ -x "$1" ]]
then
	exec "$@"
fi
