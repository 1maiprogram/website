// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Injectable, signal, WritableSignal } from "@angular/core";

export const MenuItemKeyObj = {
    FylkeSelector: "FylkeSelector",
    KommuneSelector: "KommuneSelector",
    Kommune: "Kommune",
} as const;
export type MenuItemKey = keyof(typeof MenuItemKeyObj);

export class MenuItem {
    textSignal: WritableSignal<string>;
    urlSignal: WritableSignal<string>;
    visibleSignal: WritableSignal<boolean>;
    parent?: MenuItem = undefined;
    child?: MenuItem = undefined;
    constructor(
        value: string,
        url: string,
        visible: boolean,
    ) {
        this.textSignal = signal(value);
        this.urlSignal = signal(url);
        this.visibleSignal = signal(visible);
    }
}

@Injectable({
    providedIn: "root",
})
export class MenuService {
    private menuItemsMap = new Map<string, MenuItem>();
    private fylkeSelectorMenuItem = new MenuItem("Velg fylke", "2025", true);
    private kommuneSelectorMenuItem = new MenuItem("Velg kommune", "", false);
    private kommuneMenuItem = new MenuItem("", "", false);

    constructor(
    ) {
        this.fylkeSelectorMenuItem.child = this.kommuneSelectorMenuItem;
        this.kommuneSelectorMenuItem.parent = this.fylkeSelectorMenuItem;
        this.kommuneSelectorMenuItem.child = this.kommuneMenuItem;
        this.kommuneMenuItem.parent = this.kommuneSelectorMenuItem;

        this.menuItemsMap.set(MenuItemKeyObj.FylkeSelector, this.fylkeSelectorMenuItem);
        this.menuItemsMap.set(MenuItemKeyObj.KommuneSelector, this.kommuneSelectorMenuItem);
        this.menuItemsMap.set(MenuItemKeyObj.Kommune, this.kommuneMenuItem);
    }

    getMenuItems(): MenuItem[] {
        return [
            this.fylkeSelectorMenuItem,
            this.kommuneSelectorMenuItem,
            this.kommuneMenuItem,
        ];
    }

    getMenuItem(menuItemKey: MenuItemKey): MenuItem {
        const menuItem = this.menuItemsMap.get(menuItemKey);
        if (!menuItem) {
            throw new Error(`No menu item found for ${menuItemKey}`);
        }
        return menuItem;
    }

    activateMenuItem(menuItemKey: MenuItemKey) {
        const activeMenuItem = this.getMenuItem(menuItemKey);
        let mi: MenuItem | undefined = activeMenuItem;
        do {
            mi.visibleSignal.set(true);
            mi = mi.parent;
        } while (mi);

        mi = activeMenuItem.child;
        if (mi) {
            do {
                mi.visibleSignal.set(false);
                mi = mi.child;
            } while (mi);
        }
    }

    hideMenuItems() {
        this.getMenuItems().forEach(menuItem => {
            menuItem.visibleSignal.set(false);
        });
    }
}
