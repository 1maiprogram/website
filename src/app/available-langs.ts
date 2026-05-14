// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

export type SupportedLanuages = "no_NB" | "no_NN" | "no_SE" | "en_GB";

export interface Language {
    iso639_1code: SupportedLanuages;
    displayName: string;
    flagEmoji: string; // Possible source: https://emojipedia.org/flags
}

export const defaultLang = "no_NB";

export const languages: Language[] = [
    { iso639_1code: "no_NB", displayName: "Norsk, bokmål", flagEmoji: "🇳🇴" },
    { iso639_1code: "no_NN", displayName: "Norsk, nynorsk", flagEmoji: "🇳🇴" },
    { iso639_1code: "no_SE", displayName: "Davvisámegiella (Nordsamisk)", flagEmoji: "🇳🇴" },
    { iso639_1code: "en_GB", displayName: "English", flagEmoji: "🇬🇧" },
];

export const availableLangs = languages.map((lang) => lang.iso639_1code);
