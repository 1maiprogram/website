// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { createSpyFromClass, Spy } from "@copy/vitest-auto-spies";

import { LanguageSelectorComponent } from "./language-selector.component";
import { getTranslocoModule } from "../../transloco-testing.module";
import { StorageService } from "../../storage.service";
import { defaultLang } from "../../available-langs";

describe("LanguageSelectorComponent", () => {
    let component: LanguageSelectorComponent;
    let fixture: ComponentFixture<LanguageSelectorComponent>;
    let storageServiceSpy: Spy<StorageService>;

    beforeEach(async () => {
        storageServiceSpy = createSpyFromClass(StorageService);
        storageServiceSpy.getItem.mockReturnValue(defaultLang);
        await TestBed.configureTestingModule({
            imports: [
                LanguageSelectorComponent,
                getTranslocoModule({}),
            ],
            providers: [
                { provide: StorageService, useValue: storageServiceSpy },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LanguageSelectorComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
