// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

import { MenuItem, MenuService } from "./menu.service";

import { SentryExample } from "./sentry-example.component";

@Component({
    selector: "app-root",
    imports: [
        RouterOutlet,
        RouterLink,
        SentryExample,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    public menuItems: MenuItem[];

    constructor(
        menuService: MenuService,
    ) {
        this.menuItems = menuService.getMenuItems();
    }
}
