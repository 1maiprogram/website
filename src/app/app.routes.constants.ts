// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

// Trying to defining these directly app.routes.ts creates a circular
// dependency when a component includes app.routes.ts to get the constants
// while app.routes.ts includes the component file. This putting them here in
// a separate file.

export const paramMapNameFylke: string = "fylke";
export const paramMapNameKommune: string = "kommune";
