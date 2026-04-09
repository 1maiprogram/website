// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { createSpyFromClass, Spy } from "@copy/vitest-auto-spies";
import { ActivatedRoute, convertToParamMap, NavigationEnd, Router, UrlSegment } from "@angular/router";

import { FylkeSelectorComponent } from "./fylke-selector.component";
import { RegionService } from "../../region/region.service";
import { MenuItem, MenuService } from "../../menu.service";

describe("FylkeSelectorComponent", () => {
    let component: FylkeSelectorComponent;
    let fixture: ComponentFixture<FylkeSelectorComponent>;
    let regionServiceSpy: Spy<RegionService>;
    let routerSpy: Spy<Router>;
    let menuServiceSpy: Spy<MenuService>;

    beforeEach(async () => {
        regionServiceSpy = createSpyFromClass(RegionService);

        routerSpy = createSpyFromClass(Router, {
            observablePropsToSpyOn: ['events']
        });
        routerSpy.events.nextWith(new NavigationEnd(0, "/2026", "/2026"));

        menuServiceSpy = createSpyFromClass(MenuService);
        menuServiceSpy.getMenuItem.mockReturnValue(new MenuItem("FylkeSelector", "", true));
        await TestBed.configureTestingModule({
            imports: [FylkeSelectorComponent],
            providers: [
                { provide: RegionService, useValue: regionServiceSpy },
                { provide: Router, useValue: routerSpy },
                { provide: MenuService, useValue: menuServiceSpy },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: convertToParamMap({
                                year: "2025",
                                fylke: "Oslo",
                                kommune: "Oslo",
                            }),
                            url: [
                                new UrlSegment("2025", {}),
                                new UrlSegment("Oslo", {}),
                                new UrlSegment("Oslo", {}),
                            ],
                        },
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(FylkeSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
