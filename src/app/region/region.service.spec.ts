// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { TestBed } from "@angular/core/testing";

import { RegionService } from "./region.service";

describe("RegionService", () => {
    let service: RegionService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RegionService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should retrieve all fylker", () => {
        // Arrange

        // Act
        const fylke = service.getNoFylkeArray();

        // Assert
        expect(fylke.length).toBe(16);
    });

    it("should retrieve fylke by code", () => {
        // Arrange
        const kommuner =  [
            "Færder",
            "Holmestrand",
            "Horten",
            "Larvik",
            "Sandefjord",
            "Tønsberg",
        ];

        // Act
        const result = service.getNoFylkeByCode(39);

        // Assert
        expect(result).toBeDefined();
        expect(result?.name).toBe("Vestfold");
        expect(result?.kommuner.map(k => k.name).sort()).toEqual(kommuner);
    });
});
