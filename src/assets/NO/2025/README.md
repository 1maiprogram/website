<!--
SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>

SPDX-License-Identifier: CC-BY-4.0
-->

# Fylke

From [Standard for fylkesinndeling](https://www.ssb.no/klass/klassifikasjoner/104):

> Fylkene er regionale administrative enheter ... De tilsvarer NUTS 3 i Eurostats statistiske inndeling.

# Kommune

From [Standard for kommuneinndeling](https://www.ssb.no/klass/klassifikasjoner/131):

> I Eurostats system betegnes kommuner som LAU (Local Administrative Units).
> I Norge består kommunenummeret av fire siffer, der de to første tilsvarer fylkesnummer.

e.g. *kommune* 4204

```json
  ...
  {
    "code": "4204",
    "name": "Kristiansand"
  },
  ...
```

belongs to *fylke* 42

```json
  ...
  {
    "code": "42",
    "name": "Agder"
  },
  ...
```
