// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

const collator = new Intl.Collator('no', {
  numeric: true,
  sensitivity: 'base',
});

export function nameSortFunction<T extends { name: string }>(a: T, b: T) {
    return collator.compare(a.name, b.name);
}
