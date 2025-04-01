// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { KommuneSelectorComponent } from "./kommune-selector.component";

describe("KommuneSelectorComponent", () => {
    let component: KommuneSelectorComponent;
    let fixture: ComponentFixture<KommuneSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [KommuneSelectorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(KommuneSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
