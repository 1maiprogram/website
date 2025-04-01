// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FylkeSelectorComponent } from "./fylke-selector.component";

describe("FylkeSelectorComponent", () => {
    let component: FylkeSelectorComponent;
    let fixture: ComponentFixture<FylkeSelectorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FylkeSelectorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FylkeSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
