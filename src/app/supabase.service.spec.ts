// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TestBed } from "@angular/core/testing";

import { SupabaseService } from "./supabase.service";
import { appProviders } from "./app.config";

describe("SupabaseService", () => {
    let service: SupabaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ...appProviders,
            ],
        });
        service = TestBed.inject(SupabaseService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
