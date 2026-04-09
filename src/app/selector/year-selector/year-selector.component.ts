// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { MenuService } from "../../menu.service";

export const currentYear = 2026;

@Component({
    selector: "app-year-selector",
    imports: [
        RouterLink,
    ],
    templateUrl: "./year-selector.component.html",
    styleUrl: "./year-selector.component.scss",
})
export class YearSelectorComponent {
    public years = [
        2026,
        2025,
    ];

    constructor(
        readonly menuService: MenuService,
    ) {
        this.menuService.activateMenuItem("YearSelector");
    }
}
