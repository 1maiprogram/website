<!--
SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>

SPDX-License-Identifier: GPL-3.0-or-later
-->

# About

This is the source code for the web site [www.1maiprogram.no](https://www.1maiprogram.no/)
which is a site where it super simple to find links to
[labour day programs](https://en.wikipedia.org/wiki/International_Workers%27_Day)
in the kommune in Norway you live in.

All links have a year component so you will never be given outdated information.

## Technology

This is a standard [Angular project](https://www.youtube.com/watch?v=Ata9cSC2WpM),
currently using [Angular version 21](https://angular.dev/).

The links are stored in a [Supabase Postgres database](https://supabase.com/).

## Contributing?

Awesome! To create pull requests you need to
[fork this repository](https://www.youtube.com/results?search_query=start+contributing+github)

For information on building see [here](./development.md).

For contributing labour day programs links go to the "oppdatering" page on
[https://www.1maiprogram.no/](https://www.1maiprogram.no/).

## License

Mainly [GPL-3.0-or-later](./LICENSES/GPL-3.0-or-later.txt), but with some files
[MIT](./LICENSES/MIT.txt) (more or less tool/build related configuration, e.g.
feel free to copy from my .editorconfig file to your project without worrying
about being affected by GPLv3) and some [CC-BY-4.0](./LICENSES/CC-BY-4.0.txt)
(kommune/fylke data files).
