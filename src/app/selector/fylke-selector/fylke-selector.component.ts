// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

import { Fylke, RegionService } from "../../region/region.service";
import { MenuService } from "../../menu.service";

@UntilDestroy()
@Component({
    selector: "app-fylke-selector",
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: "./fylke-selector.component.html",
    styleUrl: "./fylke-selector.component.scss",
})
export class FylkeSelectorComponent {
    public fylker: Fylke[] = [];

    constructor(
        public regionService: RegionService,
        readonly router: Router,
        readonly menuService: MenuService,
    ) {
        this.fylker = regionService.getNoFylkeArray();
        this.menuService.activateMenuItem("FylkeSelector");
    }
}
