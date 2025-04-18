// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { AaModes, sortDaCmp } from "../lib/mit/sortda";

export function nameSortFunction<T extends { name: string }>(a: T, b: T) {
    return sortDaCmp(a.name, b.name, AaModes.FIRST);
}
