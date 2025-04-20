#!/bin/bash

# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: GPL-3.0-or-later

# If current commit is not a merge commit ...
if [[ $(git log --pretty=%P -n 1 HEAD | wc -w) -eq 1 ]]
then
	PARENT="$(git log --pretty=%P -n 1 HEAD)"
	if [[ "$GIT_TEST_PREVIOUS_CHECKED_OUT_COMMIT" = "$PARENT" ]]
	then
		# ... and package.json has not changed then skip running npm install.
		git diff --quiet "$PARENT" -- package.json || npm install
	else
		npm install
	fi
else
	npm install
fi
