// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TestBed } from "@angular/core/testing";
import { NavigationEnd, Router } from "@angular/router";
import { Spy } from "@copy/vitest-auto-spies/vitest-auto-spies.types";
import { createSpyFromClass } from "@copy/vitest-auto-spies/create-spy-from-class";

import { MenuService } from "./menu.service";
import { appProviders } from "./app.config";

describe("MenuService", () => {
    let service: MenuService;
    let routerSpy: Spy<Router>;

    beforeEach(() => {
        routerSpy = createSpyFromClass(Router, {
            observablePropsToSpyOn: ['events']
        });
        routerSpy.events.nextWith(new NavigationEnd(0, "/2026", "/2026"));
        TestBed.configureTestingModule({
            providers: [
                ...appProviders,
                { provide: Router, useValue: routerSpy },
            ],
        });
        service = TestBed.inject(MenuService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
