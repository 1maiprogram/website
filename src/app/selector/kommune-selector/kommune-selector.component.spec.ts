// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { createSpyFromClass, Spy } from "jasmine-auto-spies";
import { ActivatedRoute, convertToParamMap, Router } from "@angular/router";

import { KommuneSelectorComponent } from "./kommune-selector.component";
import { Kommune, RegionService } from "../../region/region.service";
import { appProviders } from "../../app.config";

const osloKommune = new Kommune(301, 3, 'Oslo');

describe("KommuneSelectorComponent", () => {
    let component: KommuneSelectorComponent;
    let fixture: ComponentFixture<KommuneSelectorComponent>;
    let activatedRouteSpy: Spy<ActivatedRoute>;
    let regionServiceSpy: Spy<RegionService>;

    beforeEach(async () => {
        activatedRouteSpy = createSpyFromClass(ActivatedRoute);
        regionServiceSpy = createSpyFromClass(RegionService);
        regionServiceSpy.getNoKommunerByFylke.and.returnValue([osloKommune]);
        await TestBed.configureTestingModule({
            imports: [KommuneSelectorComponent],
            providers: [
                ...appProviders,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            paramMap: convertToParamMap({ fylke: "Oslo" }),
                        },
                    },
                },
                { provide: RegionService, useValue: regionServiceSpy },
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
