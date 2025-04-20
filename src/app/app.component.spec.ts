// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { createSpyFromClass, Spy } from "jasmine-auto-spies";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let activatedRouteSpy: Spy<ActivatedRoute>;

    beforeEach(async () => {
        activatedRouteSpy = createSpyFromClass(ActivatedRoute);

        await TestBed.configureTestingModule({
            imports: [
                AppComponent,
            ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteSpy },
            ],
        }).compileComponents();
    });

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
