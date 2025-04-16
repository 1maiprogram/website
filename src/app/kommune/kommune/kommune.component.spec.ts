// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    convertToParamMap,
    UrlSegment,
} from "@angular/router";
import { createSpyFromClass, Spy } from "jasmine-auto-spies";

import { KommuneComponent } from "./kommune.component";
import { MenuItem, MenuService } from "../../menu.service";

describe("KommuneComponent", () => {
    let component: KommuneComponent;
    let fixture: ComponentFixture<KommuneComponent>;
    let menuServiceSpy: Spy<MenuService>;

    beforeEach(async () => {
        menuServiceSpy = createSpyFromClass(MenuService);
        const menuItem = new MenuItem("Oslo", "url", true);
        menuServiceSpy.getMenuItem.and.returnValue(menuItem);
        await TestBed.configureTestingModule({
            imports: [
                KommuneComponent,
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: convertToParamMap({
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
                { provide: MenuService, useValue: menuServiceSpy },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(KommuneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
