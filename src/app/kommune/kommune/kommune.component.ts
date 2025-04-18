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
    concat,
    Observable,
    of,
    skip,
    switchMap,
} from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

import { MenuItem, MenuService } from "../../menu.service";
import {
    paramMapNameFylke,
    paramMapNameKommune,
} from "../../app.routes.constants";
import { Link, SupabaseService } from "../../supabase.service";
import { SpinnerComponent } from "../../shared/spinner/spinner.component";

@UntilDestroy()
@Component({
    selector: "app-kommune",
    imports: [
        CommonModule,
        SpinnerComponent,
    ],
    templateUrl: "./kommune.component.html",
    styleUrl: "./kommune.component.scss",
})
export class KommuneComponent implements OnInit {
    private readonly menuItem: MenuItem;

    public links$ = new BehaviorSubject<Link[]>([]);
    public loading$: Observable<boolean> = new BehaviorSubject<boolean>(true);

    constructor(
        private readonly route: ActivatedRoute,
        private readonly menuService: MenuService,
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

        // If the page is starting/loading directly at KommuneComponent (as
        // opposed to first selecting fylke -> kommune), then the "Velg kommune"
        // menu item will not have the url set, so set it here unconditionally.
        // In worst case we just overwrite with the same information.
        const idx = url.lastIndexOf("/");
        const parentUrl = url.substring(0, idx);
        this.menuService.getMenuItem("KommuneSelector").urlSignal.set(parentUrl);

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
        this.loading$ = concat(
            of(true),
            this.links$.pipe(
                skip(1), // Due to initial BehaviorSubject value []
                switchMap((link) => of(false)),
            ),
        );
    }
}
