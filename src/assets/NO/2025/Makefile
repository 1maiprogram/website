# SPDX-FileCopyrightText: 2025 Håkon Løvdal <kode@denkule.no>
#
# SPDX-License-Identifier: CC-BY-4.0

all: fylke.csv fylke.json kommune.csv kommune.json

clean:
	rm -f fylke.csv fylke.json kommune.csv kommune.json

fylke.csv: 1709.csv
	iconv -f iso88591 -t utf8 1709.csv | cut -d';' -f1,4 | sed 's/ -.*/"/' > fylke.csv
	reuse annotate --copyright="Håkon Løvdal <kode@denkule.no>" --license="CC-BY-4.0" fylke.csv

fylke.json: fylke.csv
	grep -v Uoppgitt fylke.csv | npx csvtojson --delimiter=';' | jq . > fylke.json
	reuse annotate --copyright="Håkon Løvdal <kode@denkule.no>" --license="CC-BY-4.0" fylke.json

kommune.csv: 1710.csv
	iconv -f iso88591 -t utf8 1710.csv | cut -d';' -f1,4 | sed 's/ -.*/"/; s/ (.*"/"/' > kommune.csv
	reuse annotate --copyright="Håkon Løvdal <kode@denkule.no>" --license="CC-BY-4.0" kommune.csv

kommune.json: kommune.csv
	grep -v Uoppgitt kommune.csv | npx csvtojson --delimiter=';' | jq . > kommune.json
	reuse annotate --copyright="Håkon Løvdal <kode@denkule.no>" --license="CC-BY-4.0" kommune.json
