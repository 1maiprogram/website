// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Injectable } from "@angular/core";

import fylkeJson from "@assets/NO/2025/fylke.json";
import kommuneJson from "@assets/NO/2025/kommune.json";

export type JsonElement = {
    code: string;
    name: string;
}

export class Kommune {
    constructor(
        public code: number,
        public fylkeCode: number,
        public name: string,
    ) {
    }
}

export class Fylke {
    constructor(
        public code: number,
        public name: string,
    ) {
    }
}
export class FylkeWithKommuner {
    constructor(
        public code: number,
        public name: string,
        public kommuner: Kommune[],
    ) {

    }
}

@Injectable({
    providedIn: "root",
})
export class RegionService {
    private _fylker: Fylke[];
    private _fylkerWithKommuner: FylkeWithKommuner[];
    private _kommuner: Kommune[];

    constructor() {
        this._kommuner = kommuneJson.map(k => new Kommune(Number(k.code), Number(k.code.substring(0,2)), k.name));
        this._fylker = fylkeJson.map(f => new Fylke(Number(f.code), f.name));
        this._fylkerWithKommuner = fylkeJson.map(f => {
            const kommuner = this._kommuner.filter(k => k.fylkeCode === Number(f.code));
            return new FylkeWithKommuner(Number(f.code), f.name, kommuner);
        });
    }

    getNoFylkeArray(): Fylke[] {
        return this._fylker;
    }

    getNoFylkeByCode(code: number): FylkeWithKommuner | undefined {
        return this._fylkerWithKommuner.find(f => f.code === code);
    }

    getNoKommunerByFylke(name: string): Kommune[] {
        const fylke = this._fylkerWithKommuner.find(f => f.name === name);
        if (!fylke) {
            console.error(`Unable to find fylke by name ${name}`);
            return [];
        }
        return fylke.kommuner;
    }
}
