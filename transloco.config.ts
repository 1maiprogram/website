// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TranslocoGlobalConfig } from "@jsverse/transloco-utils";

import { availableLangs } from "./src/app/available-langs";

const config: TranslocoGlobalConfig = {
    rootTranslationsPath: "public/i18n/",
    langs: availableLangs,
    keysManager: {},
};

export default config;
