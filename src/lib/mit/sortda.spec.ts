// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { AaModes, sortDa, sortDaCmp } from "./sortda";

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

class Song {
    constructor(
        public title: string,
        public performer: string,
    ) {
    }
}

describe("sortDaCmp", () => {
    it("sort by title", () => {
        // Arrange
        const testData = [
            new Song("Strange fruit", "Billie Holiday"),
            new Song("Which side are you on?", "The Almanac Singers"),
            new Song("Sixteen tons", "Merle Travis"),
        ];
        const expected = [
            "Sixteen tons",
            "Strange fruit",
            "Which side are you on?",
        ];

        // Act
        testData.sort((a, b) => sortDaCmp(a.title, b.title, AaModes.FIRST));

        // Assert
        expect(testData.map(d => d.title)).toEqual(expected);
    });
});
