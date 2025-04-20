// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Routes } from "@angular/router";

import { FylkeSelectorComponent } from "./selector/fylke-selector/fylke-selector.component";
import { KommuneSelectorComponent } from "./selector/kommune-selector/kommune-selector.component";
import {
    paramMapNameFylke,
    paramMapNameKommune,
} from "./app.routes.constants";
import { KommuneComponent } from "./kommune/kommune/kommune.component";
import { OppdateringComponent } from "./oppdatering/oppdatering.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
    { path: '',   redirectTo: '/2025', pathMatch: 'full' },
    { path: '2025', component: FylkeSelectorComponent },
    { path: `2025/:${paramMapNameFylke}`, component: KommuneSelectorComponent },
    { path: `2025/:${paramMapNameFylke}/:${paramMapNameKommune}`, component: KommuneComponent },
    { path: 'oppdatering', component: OppdateringComponent },
    { path: 'om', component: AboutComponent },
];
