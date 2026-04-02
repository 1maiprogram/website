// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Spy } from "@copy/vitest-auto-spies/vitest-auto-spies.types";
import { createSpyFromClass } from "@copy/vitest-auto-spies/create-spy-from-class";

import { AboutComponent } from "./about.component";
import { MenuService } from "../menu.service";

describe("AboutComponent", () => {
    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;
    let menuServiceSpy: Spy<MenuService>;

    beforeEach(async () => {
        menuServiceSpy = createSpyFromClass(MenuService);
        await TestBed.configureTestingModule({
            imports: [
                AboutComponent,
            ],
            providers: [
                { provide: MenuService, useValue: menuServiceSpy },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
