#!/bin/sh

# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: GPL-3.0-or-later

git show --oneline --name-only \
	| sed 1d \
	| tr '\012' '\000' \
	| xargs -0 grep --null -L SPDX-License-Identifier \
	| xargs -0 --no-run-if-empty reuse annotate --copyright="Håkon Løvdal <kode@denkule.no>" --license="GPL-3.0-or-later" --fallback-dot-license
