// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { nameSortFunction } from "./utils";

describe("nameSortFunction", () => {
    it("should sort", () => {
        // Arrange
        const data = [
            { name: "en", value: 1 },
            { name: "to", value: 2 },
            { name: "tre", value: 3 },
            { name: "fire", value: 4 },
        ];
        const expected = ["en", "fire", "to", "tre"];

        // Act
        data.sort(nameSortFunction);

        // Assert
        expect(data.map(d => d.name)).toEqual(expected);
    });
});
