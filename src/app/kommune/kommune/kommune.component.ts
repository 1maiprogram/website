// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { CommonModule } from "@angular/common";
import {
    Component,
    OnInit,
} from "@angular/core";
import {
    ActivatedRoute,
} from "@angular/router";
import {
    BehaviorSubject,
    Observable,
    of,
} from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { MenuItem, MenuService } from "../../menu.service";
import {
    paramMapNameFylke,
    paramMapNameKommune,
} from "../../app.routes.constants";
import { Link, SupabaseService } from "../../supabase.service";

@UntilDestroy()
@Component({
    selector: "app-kommune",
    imports: [
        CommonModule,
    ],
    templateUrl: "./kommune.component.html",
    styleUrl: "./kommune.component.scss",
})
export class KommuneComponent implements OnInit {
    private readonly menuItem: MenuItem;

    public links$ = new BehaviorSubject<Link[]>([]);

    constructor(
        private readonly route: ActivatedRoute,
        readonly menuService: MenuService,
        private readonly supabaseService: SupabaseService,
    ) {
        menuService.activateMenuItem("Kommune");
        this.menuItem = menuService.getMenuItem("Kommune");
    }

    ngOnInit() {
        const year = this.route.snapshot.url.map((segment) => segment.path)[0];
        const url: string = this.route.snapshot.url
            .map((segment) => segment.path)
            .join("/");
        this.menuItem.urlSignal.set(url);
        const fylke = this.route.snapshot.paramMap.get(paramMapNameFylke);
        if (!fylke) {
            console.error(`Invalid fylke value: ${fylke}`);
            return;
        }
        const kommune = this.route.snapshot.paramMap.get(paramMapNameKommune);
        if (!kommune) {
            console.error(`Invalid kommune value: ${kommune}`);
            return;
        }
        this.menuItem.textSignal.set(kommune);
        this.supabaseService
            .getLinks(year, fylke, kommune)
            .pipe(
                untilDestroyed(this),
            )
            .subscribe((links) => {
                // Using this intermediate observable variable to avoid
                // "Acquiring an exclusive Navigator LockManager failed".
                // https://github.com/supabase/supabase-js/issues/936
                this.links$.next(links);
            });
    }
}
