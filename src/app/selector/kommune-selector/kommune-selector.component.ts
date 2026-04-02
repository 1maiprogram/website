// SPDX-FileCopyrightText: 2025,2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, OnInit } from "@angular/core";

import {
    ActivatedRoute,
    Router,
    RouterLink,
} from "@angular/router";

import { Kommune, RegionService } from "../../region/region.service";
import { MenuService } from "../../menu.service";
import { paramMapNameYear, paramMapNameFylke } from "../../app.routes.constants";

@Component({
    selector: "app-kommune-selector",
    imports: [
        RouterLink,
    ],
    templateUrl: "./kommune-selector.component.html",
    styleUrl: "./kommune-selector.component.scss",
})
export class KommuneSelectorComponent implements OnInit {
    public kommuner: Kommune[] = [];

    constructor(
        public regionService: RegionService,
        private readonly route: ActivatedRoute,
        readonly router: Router,
        public menuService: MenuService,
    ) {
        this.menuService.activateMenuItem("KommuneSelector");
    }

    ngOnInit() {
        const year = this.route.snapshot.paramMap.get(paramMapNameYear);
        if (!year) {
            console.error(`Invalid year value: ${year}`);
            return;
        }
        const fylke = this.route.snapshot.paramMap.get(paramMapNameFylke);
        if (!fylke) {
            console.error(`Invalid fylke value: ${fylke}`);
            return;
        }
        const mi = this.menuService.getMenuItem("KommuneSelector");
        mi.urlSignal.set(`${year}/${fylke}`);
        this.kommuner = this.regionService.getNoKommunerByFylke(fylke);
        if (this.kommuner.length === 0) {
            console.error(`No kommuner found for fylke ${fylke}`);
            return;
        }
    }
}
