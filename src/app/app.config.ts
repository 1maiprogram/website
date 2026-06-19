// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import {
    ApplicationConfig,
    isDevMode,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideHttpClient, withXhr } from "@angular/common/http";
import { provideTransloco } from "@jsverse/transloco";

import { routes } from "./app.routes";
import { TranslocoHttpLoader } from "./transloco-loader";
import { availableLangs, defaultLang } from "./available-langs";

export const appProviders = [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withXhr()),
    provideTransloco({
        config: {
            availableLangs: availableLangs,
            defaultLang: defaultLang,
            reRenderOnLangChange: true,
            prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader,
    }),
];

export const appConfig: ApplicationConfig = {
    providers: appProviders,
};
