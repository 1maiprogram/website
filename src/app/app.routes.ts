// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Routes } from "@angular/router";

import { FylkeSelectorComponent } from "./selector/fylke-selector/fylke-selector.component";
import { KommuneSelectorComponent } from "./selector/kommune-selector/kommune-selector.component";

export const routes: Routes = [
    { path: '',   redirectTo: '/2025', pathMatch: 'full' },
    { path: '2025', component: FylkeSelectorComponent },
    { path: '2025/:fylke', component: KommuneSelectorComponent },
];
