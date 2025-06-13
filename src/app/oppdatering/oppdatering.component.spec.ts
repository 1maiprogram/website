// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { OppdateringComponent } from "./oppdatering.component";
import { appProviders } from "../app.config";

describe("OppdateringComponent", () => {
    let component: OppdateringComponent;
    let fixture: ComponentFixture<OppdateringComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OppdateringComponent,
            ],
            providers: [
                ...appProviders,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OppdateringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
