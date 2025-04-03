// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

import { MenuItem, MenuService } from "./menu.service";

@Component({
    selector: "app-root",
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    public menuItems: MenuItem[] = [];

    constructor(
        menuService: MenuService,
    ) {
        this.menuItems.push(menuService.getMenuItem("FylkeSelector"))
        this.menuItems.push(menuService.getMenuItem("KommuneSelector"))
        this.menuItems.push(menuService.getMenuItem("Kommune"))
    }
}
