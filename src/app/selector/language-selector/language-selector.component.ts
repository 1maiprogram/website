// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, OnInit } from "@angular/core";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";

import { availableLangs, defaultLang, languages, SupportedLanuages } from "../../available-langs";
import { isEventTarget } from "@shared/utils";

const LANG_KEY = 'language';

@Component({
    selector: "app-language-selector",
    imports: [
        TranslocoModule,
    ],
    templateUrl: "./language-selector.component.html",
    styleUrl: "./language-selector.component.scss",
})
export class LanguageSelectorComponent implements OnInit {
    selectedLanguage: string = defaultLang;
    languages = languages;

    constructor(
        private translocoService: TranslocoService,
    ) {
        const savedLanguage = localStorage.getItem(LANG_KEY);
        if (savedLanguage) {
            if (availableLangs.includes(savedLanguage as SupportedLanuages)) {
                this.selectedLanguage = savedLanguage;
            } else {
                console.warn(`Saved language ${savedLanguage} is not in available languages, falling back to default language ${defaultLang}`);
            }
        }
    }

    ngOnInit() {
        this.translocoService.setActiveLang(this.selectedLanguage);
    }

    onLanguageChange(e: Event) {
        if (!isEventTarget(e.target, HTMLSelectElement)) {
            throw new Error(`Expected e.target to be HTMLSelectElement, e was ${e?.constructor?.name ?? e}`);
        }
        this.selectedLanguage = e.target.value;
        localStorage.setItem(LANG_KEY, this.selectedLanguage);
        this.translocoService.setActiveLang(this.selectedLanguage);
    }
}
