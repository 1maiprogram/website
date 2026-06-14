// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";

import no_NB from "@public/i18n/no_NB.json";
import no_NN from "@public/i18n/no_NN.json";
import no_SE from "@public/i18n/no_SE.json";
import en_GB from "@public/i18n/en_GB.json";

@Injectable({ providedIn: "root" })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        switch (lang) {
            case "no_NB":
                return of(no_NB);
            case "no_NN":
                return of(no_NN);
            case "no_SE":
                return of(no_SE);
            case "en_GB":
                return of(en_GB);
        }
        return this.http.get<Translation>(`/i18n/${lang}.json`);
    }
}
