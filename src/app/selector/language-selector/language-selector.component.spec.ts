// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LanguageSelectorComponent } from "./language-selector.component";

describe("LanguageSelectorComponent", () => {
    let component: LanguageSelectorComponent;
    let fixture: ComponentFixture<LanguageSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LanguageSelectorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageSelectorComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
