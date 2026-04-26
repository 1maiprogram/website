// SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { bootstrapApplication } from "@angular/platform-browser";
import * as Sentry from "@sentry/angular";

import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";

Sentry.init({
    dsn: "https://30915f0b8604a10b242ef0d4e44b3927@o4510201394888704.ingest.de.sentry.io/4510201399148624",
    integrations: [
        Sentry.browserTracingIntegration(),
    ],
    tracesSampleRate: 1,
    enableLogs: true,
    sendDefaultPii: true,
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);
