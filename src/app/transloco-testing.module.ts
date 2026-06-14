// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TranslocoTestingModule, TranslocoTestingOptions } from "@jsverse/transloco";

import { availableLangs, defaultLang, SupportedLanuages } from "./available-langs";

import no_NB from "@public/i18n/no_NB.json";
import no_NN from "@public/i18n/no_NN.json";
import no_SE from "@public/i18n/no_SE.json";
import en_GB from "@public/i18n/en_GB.json";

type LangsObjType = { [key in SupportedLanuages]: any };
const LangsObj: LangsObjType = {
    no_NB: no_NB,
    no_NN: no_NN,
    no_SE: no_SE,
    en_GB: en_GB,
};

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  const { langs, translocoConfig, ...rest } = options;
  return TranslocoTestingModule.forRoot({
    langs: {
      ...LangsObj,
      ...langs,
    },
    translocoConfig: {
      availableLangs: availableLangs,
      defaultLang: defaultLang,
      ...translocoConfig,
    },
    ...rest,
  });
}
