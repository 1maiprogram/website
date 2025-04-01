// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    ActivatedRoute,
    Router,
    RouterLink,
} from "@angular/router";

import { nameSortFunction } from "@shared/utils";
import { Kommune, RegionService } from "../../region/region.service";

@Component({
    selector: "app-kommune-selector",
    imports: [
        CommonModule,
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
    ) {
    }

    ngOnInit() {
        const fylke = this.route.snapshot.paramMap.get("fylke");
        if (!fylke) {
            console.error(`Invalid fylke value: ${fylke}`);
            return;
        }
        this.kommuner = this.regionService.getNoKommunerByFylke(fylke);
        if (this.kommuner.length === 0) {
            console.error(`No kommuner found for fylke ${fylke}`);
            return;
        }
        this.kommuner.sort(nameSortFunction);
    }
}
