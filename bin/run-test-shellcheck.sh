#!/bin/sh

# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: GPL-3.0-or-later

git ls-files \
	| grep '\.sh$' \
	| tr '\012' '\000' \
	| xargs -0 --no-run-if-empty shellcheck
