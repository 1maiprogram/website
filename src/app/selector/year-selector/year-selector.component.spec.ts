// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { YearSelectorComponent } from "./year-selector.component";

describe("YearSelectorComponent", () => {
    let component: YearSelectorComponent;
    let fixture: ComponentFixture<YearSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [YearSelectorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(YearSelectorComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
