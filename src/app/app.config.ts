// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ApplicationConfig, provideZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";

export const appProviders = [
    provideZonelessChangeDetection(),
    provideRouter(routes),
];

export const appConfig: ApplicationConfig = {
    providers: appProviders,
};
