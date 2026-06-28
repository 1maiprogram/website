// SPDX-FileCopyrightText: 2025,2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import { Fylke, RegionService } from "../../region/region.service";
import { MenuService } from "../../menu.service";

@Component({
    selector: "app-fylke-selector",
    imports: [
        RouterLink,
    ],
    templateUrl: "./fylke-selector.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: "./fylke-selector.component.scss",
})
export class FylkeSelectorComponent {
    public fylker: Fylke[] = [];

    constructor(
        public regionService: RegionService,
        readonly router: Router,
        readonly menuService: MenuService,
        private readonly route: ActivatedRoute,
    ) {
        this.fylker = regionService.getNoFylkeArray();
        const year = this.route.snapshot.url.map((segment) => segment.path)[0];
        this.menuService.getMenuItem("FylkeSelector").urlSignal.set(year);
        this.menuService.activateMenuItem("FylkeSelector");
    }
}
