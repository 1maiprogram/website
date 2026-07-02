// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { MenuService } from "../../menu.service";

export const currentYear = 2026;

@Component({
    selector: "app-year-selector",
    imports: [
        RouterLink,
    ],
    templateUrl: "./year-selector.component.html",
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: "./year-selector.component.scss",
})
export class YearSelectorComponent {
    public years = [
        2026,
        2025,
    ];
    readonly menuService = inject(MenuService);

    constructor() {
        this.menuService.activateMenuItem("YearSelector");
    }
}
