// SPDX-FileCopyrightText: 2025,2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Routes } from "@angular/router";

import { YearSelectorComponent } from "./selector/year-selector/year-selector.component";
import { FylkeSelectorComponent } from "./selector/fylke-selector/fylke-selector.component";
import { KommuneSelectorComponent } from "./selector/kommune-selector/kommune-selector.component";
import {
    paramMapNameFylke,
    paramMapNameKommune,
    paramMapNameYear,
} from "./app.routes.constants";
import { KommuneComponent } from "./kommune/kommune/kommune.component";
import { OppdateringComponent } from "./oppdatering/oppdatering.component";
import { AboutComponent } from "./about/about.component";

export const yearSelectorRoutePath = "år";

export const routes: Routes = [
    { path: "", redirectTo: "/2026", pathMatch: "full" },
    { path: yearSelectorRoutePath, component: YearSelectorComponent },
    { path: "oppdatering", component: OppdateringComponent },
    { path: "om", component: AboutComponent },

    // NB! These routes with :${paramMapNameYear} must be last, otherwise they
    // will match before the more specific routes above.
    { path: `:${paramMapNameYear}`, component: FylkeSelectorComponent },
    { path: `:${paramMapNameYear}/:${paramMapNameFylke}`, component: KommuneSelectorComponent },
    { path: `:${paramMapNameYear}/:${paramMapNameFylke}/:${paramMapNameKommune}`, component: KommuneComponent },
];
