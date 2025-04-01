// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

export function nameSortFunction<T extends { name: string }>(a: T, b: T) {
    if (a.name === b.name) {
        return 0;
    }
    return a.name > b.name ? 1 : -1;
}
