// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { AaModes, sortDa } from "./sortda";

describe("sortDa", () => {
    it("should sort", () => {
        // Arrange
        const testData = [
            "Aakirkeby",
            "København",
            "Ålestrup",
            "Aalestrup",
            "Ørestaden",
            "Sorø",
            "Hvidovre",
            "Aalborg",
            "Test Å",
            "Test Ø",
            "Test Æ",
            "Test å",
            "Test ø",
            "Test æ",
        ];
        const expected = [
            "Aakirkeby",
            "Aalborg",
            "Aalestrup",
            "Hvidovre",
            "København",
            "Sorø",
            "Test Æ",
            "Test æ",
            "Test Ø",
            "Test ø",
            "Test Å",
            "Test å",
            "Ørestaden",
            "Ålestrup",
        ];

        // Act
        sortDa(testData, AaModes.FIRST);

        // Assert
        expect(testData).toEqual(expected);
    });
});
