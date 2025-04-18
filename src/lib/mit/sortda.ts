// SPDX-FileCopyrightText: 2013 David Konrad davidkonrad at gmail dot com
// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: MIT

/*!
 * javascript array sort with respect of danish characters
 * supports æ, ø, å and aa (double-a)
 */

export const AaModes = {
    FIRST: "FIRST", // aa is sorted to the beginning of the array, before a
    LAST:  "LAST",  // the default - aa is sorted to the end of the array, after å
    ARING: "ARING", // aa is considered equal with å
} as const;
export type AaModesType = keyof typeof AaModes;

function intArray(c: string, aamode: AaModesType) {
    let array: number[] = [];
    c = c.toLowerCase();
    for (let i = 0; i < c.length; i++) {
        if (c.substr(i, 2) === "aa") {
            switch (aamode) {
                case AaModes.FIRST:
                    array.push(0);
                    break;
                case AaModes.ARING:
                    array.push(299);
                    break;
                default:
                    array.push(300);
                    break;
            }
            i = i + 1;
        } else {
            switch (c.charCodeAt(i)) {
                case 229: //å
                    array.push(299);
                    break;
                case 248: //ø
                    array.push(298);
                    break;
                case 230: //æ
                    array.push(297);
                    break;
                default:
                    array.push(c.charCodeAt(i));
                    break;
            }
        }
    }
    return array;
}

export function sortDa(arr: string[], aamode: AaModesType) {
    arr.sort(function (a, b) {
        const d = intArray(a, aamode);
        const e = intArray(b, aamode);
        for (let f = 0; f < d.length; f++) {
            if (d[f] != e[f]) {
                if (f == e.length) {
                    return 1; //d has more chars than e
                } else {
                    return d[f] - e[f];
                }
            }
        }
        return -1; //e has more chars than d
    });
}
