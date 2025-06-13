// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { ActivatedRoute } from "@angular/router";

import { FylkeSelectorComponent } from "./fylke-selector.component";
import { appProviders } from "../../app.config";

describe("FylkeSelectorComponent", () => {
    let component: FylkeSelectorComponent;
    let fixture: ComponentFixture<FylkeSelectorComponent>;
    let activatedRouteSpy: Spy<ActivatedRoute>;

    beforeEach(async () => {
        activatedRouteSpy = createSpyFromClass(ActivatedRoute);
        await TestBed.configureTestingModule({
            imports: [FylkeSelectorComponent],
            providers: [
                ...appProviders,
                { provide: ActivatedRoute, useValue: activatedRouteSpy },
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
