// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Injectable } from "@angular/core";
import { createClient } from "@supabase/supabase-js";

import { environment } from "../environments/environment";
import { Database } from "../supabase/types";
import { filter, from, map, Observable } from "rxjs";

export interface Link {
    description: string | null;
    fylke: string;
    id: number;
    kommune: string;
    link: string;
    year: number;
}

@Injectable({
    providedIn: "root",
})
export class SupabaseService {

    private supabase = createClient<Database>(
        environment.supabaseUrl,
        environment.supabaseKey,
    );

    constructor(
    ) {
    }

    // https://www.youtube.com/watch?v=wn2y_Z0r3ok
    getLinks(year: string, fylke: string, kommune: string): Observable<Link[]> {
        const promise = this.supabase
            .from("link_table")
            .select("*")
            .eq("year", Number(year))
            .eq("fylke", fylke)
            .eq("kommune", kommune)
            ;
        return from(promise)
            .pipe(
                map(response => response.data),
                filter(data => data !== null),
            );
    }
}
