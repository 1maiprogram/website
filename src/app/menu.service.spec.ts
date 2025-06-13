// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TestBed } from "@angular/core/testing";

import { MenuService } from "./menu.service";
import { appProviders } from "./app.config";

describe("MenuService", () => {
    let service: MenuService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ...appProviders,
            ],
        });
        service = TestBed.inject(MenuService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
