// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Fylke, RegionService } from "../../region/region.service";

@Component({
    selector: "app-fylke-selector",
    imports: [
        CommonModule,
    ],
    templateUrl: "./fylke-selector.component.html",
    styleUrl: "./fylke-selector.component.scss",
})
export class FylkeSelectorComponent {
    public fylker: Fylke[] = [];

    constructor(
        public regionService: RegionService,
    ) {
        this.fylker = regionService.getNoFylkeArray();
    }
}
