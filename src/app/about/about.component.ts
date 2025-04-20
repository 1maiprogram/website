// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { NgxBackButtonDirective } from "ngx-back-button";

import { MenuService } from "../menu.service";

@Component({
    selector: "app-about",
    imports: [
        NgxBackButtonDirective,
    ],
    templateUrl: "./about.component.html",
    styleUrl: "./about.component.scss",
})
export class AboutComponent {

    constructor(
        readonly menuService: MenuService,
    ) {
        menuService.hideMenuItems();
    }

}
