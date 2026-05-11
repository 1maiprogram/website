// SPDX-FileCopyrightText: 2026 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component } from "@angular/core";
import { TranslocoModule, TranslocoService } from "@jsverse/transloco";

import { defaultLang, languages } from "../../available-langs";
import { isEventTarget } from "@shared/utils";

@Component({
    selector: "app-language-selector",
    imports: [
        TranslocoModule,
    ],
    templateUrl: "./language-selector.component.html",
    styleUrl: "./language-selector.component.scss",
})
export class LanguageSelectorComponent {
    selectedLanguage: string = defaultLang;
    languages = languages;

    constructor(
        private translocoService: TranslocoService,
    ) {
    }

    onLanguageChange(e: Event) {
        if (!isEventTarget(e.target, HTMLSelectElement)) {
            throw new Error(`Expected e.target to be HTMLSelectElement, e was ${e?.constructor?.name ?? e}`);
        }
        this.selectedLanguage = e.target.value;
        this.translocoService.setActiveLang(this.selectedLanguage);
    }
}
