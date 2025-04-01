// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { createSpyFromClass, Spy } from "jasmine-auto-spies";
import { ActivatedRoute } from "@angular/router";

import { KommuneSelectorComponent } from "./kommune-selector.component";

describe("KommuneSelectorComponent", () => {
    let component: KommuneSelectorComponent;
    let fixture: ComponentFixture<KommuneSelectorComponent>;
    let activatedRouteSpy: Spy<ActivatedRoute>;

    beforeEach(async () => {
        activatedRouteSpy = createSpyFromClass(ActivatedRoute);
        await TestBed.configureTestingModule({
            imports: [KommuneSelectorComponent],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteSpy },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(KommuneSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
