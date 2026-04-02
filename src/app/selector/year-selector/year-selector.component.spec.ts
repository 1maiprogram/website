// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { Spy } from "@copy/vitest-auto-spies/vitest-auto-spies.types";
import { createSpyFromClass } from "@copy/vitest-auto-spies/create-spy-from-class";

import { YearSelectorComponent } from "./year-selector.component";
import { MenuService } from "../../menu.service";

describe("YearSelectorComponent", () => {
    let component: YearSelectorComponent;
    let fixture: ComponentFixture<YearSelectorComponent>;
    let menuServiceSpy: Spy<MenuService>;
    let activatedRouteSpy: Spy<ActivatedRoute>;

    beforeEach(async () => {
        menuServiceSpy = createSpyFromClass(MenuService);
        activatedRouteSpy = createSpyFromClass(ActivatedRoute);

        await TestBed.configureTestingModule({
            imports: [
                YearSelectorComponent,
            ],
            providers: [
                { provide: MenuService, useValue: menuServiceSpy },
                { provide: ActivatedRoute, useValue: activatedRouteSpy },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(YearSelectorComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
