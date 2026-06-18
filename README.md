# IFB Klassenportal

Statische Website für Stundenplan, Klausurenplan und Notenrechner der IFB-Klassen.

Die Seite läuft ohne Backend: HTML, CSS und JavaScript werden direkt im Browser geladen. Stundenplan- und Klausurdaten liegen in `data.js`; Noten aus dem Notenrechner bleiben nur im `localStorage` des jeweiligen Browsers.

## Seiten

- `index.html` - Einstieg mit Links zu den Bereichen und PDF-Downloads
- `stundenplan.html` - Wochenplan, aktuelle Stunde, nächste Klausur und Klassenlinks
- `klausurenplan.html` - Klausurtermine nach Klasse und Datum
- `notenrechner.html` - Fächer, gewichtete Noten, CSV-Import/Export und PDF-Export
- `datenschutz.html` - Hinweise zu lokaler Speicherung, Hosting und externen Ressourcen
- `legacy/` - alte Version als Archiv

## Nutzung

Die Seite kann direkt aus dem Dateisystem geöffnet werden. Ein lokaler Server ist nicht zwingend nötig.

```text
index.html
stundenplan.html
klausurenplan.html
notenrechner.html
```

Für GitHub Pages oder einen anderen statischen Hoster müssen nur die Dateien aus diesem Ordner veröffentlicht werden.

## Externe Ressourcen

Aktuell werden diese Bibliotheken per CDN geladen:

- Google Fonts für `Inter`
- Lucide Icons für UI-Symbole
- html2pdf.js nur auf `notenrechner.html`

Wenn die Seite komplett ohne externe Requests laufen soll, sollten diese Assets lokal eingebunden und die Hinweise in `datenschutz.html` angepasst werden.

## Datenpflege

- Klassen, Fächer, Klausuren und Ferien: `data.js`
- Wochenpläne: aktuell direkt in `stundenplan.html`
- Gemeinsames Styling: `style.css`
- Cookie-/Datenschutzhinweis: `cookie-consent.js`

## Hinweise

- Der Notenrechner speichert Daten nur lokal im Browser.
- Beim Löschen der Browserdaten gehen lokale Notenrechner-Daten verloren.
- PDF-Downloads im Repository sind Momentaufnahmen und müssen bei neuen Plänen ersetzt werden.
