// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResolveEnd, Router, RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from "rxjs";

import { Fylke, RegionService } from "../../region/region.service";
import { nameSortFunction } from "@shared/utils";
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
        this.fylker.sort(nameSortFunction);

        // Figure out where we are navigating to when exiting this component.
        router.events
            .pipe(
                filter(e => e instanceof ResolveEnd),
                filter(e => e.url.split("/").length === 3),  // e.g. "/2025/Agder"
                untilDestroyed(this)
            )
            .subscribe(e => {
                const m = menuService.getMenuItem("KommuneSelector");
                m.urlSignal.set(e.url);
            });
    }
}
