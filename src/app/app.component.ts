// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";

import { RouterLink, RouterOutlet } from "@angular/router";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";
import { NgOptimizedImage } from '@angular/common';

import { MenuItem, MenuService } from "./menu.service";
import { LanguageSelectorComponent } from "./selector/language-selector/language-selector.component";

@Component({
    selector: "app-root",
    imports: [
        RouterOutlet,
        RouterLink,
        LanguageSelectorComponent,
        TranslocoModule,
        NgOptimizedImage,
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    public menuItems: MenuItem[];

    constructor(
        menuService: MenuService,
        private translocoService: TranslocoService,
    ) {
        this.menuItems = menuService.getMenuItems();
    }
}
