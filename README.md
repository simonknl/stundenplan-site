# Schulverwaltungs-Website · IFB

Eine moderne, benutzerfreundliche Web-Anwendung für Schüler zur Verwaltung von Stundenplänen, Klausurterminen und Notenberechnung.

## Features

### 📅 Stundenplan
- Übersichtliche Stundenplandarstellung
- Einfache Navigation durch alle Unterrichtstage
- Aktuelle PDF-Version verfügbar
- Responsive Design für Mobile und Desktop

### 📝 Klausurenplan
- Verwaltung aller Klausurtermine
- Sortierte Anzeige nach Datum
- PDF-Export des gesamten Klausurenplans
- Einfache Übersicht über anstehende Prüfungen

### 🔢 Notenrechner
Der erweiterte Notenrechner mit den folgenden Funktionen:

#### Fächer-Management
- Beliebig viele Fächer erstellen (Deutsch, Mathematik, Englisch, etc.)
- Separate Notenverwaltung pro Fach
- Fächer hinzufügen und löschen

#### Notenberechnung
- Einfaches Notensystem (1-6 Skala)
- Gewichtete Notenberechnung
- Voreingestellte Kategorien:
  - Schulaufgabe (2× gewichtet)
  - Kurzarbeit (1,5× gewichtet)
  - Examen, Mündlich, Referat (1× gewichtet)

#### Notenstufen
- 1,0-1,5 = sehr gut
- 1,6-2,5 = gut
- 2,6-3,5 = befriedigend
- 3,6-4,5 = ausreichend
- 4,6-5,5 = mangelhaft
- 5,6-6,0 = ungenügend

#### Export & Import
- **CSV Export** - Pro Fach als Tabellendatei (z.B. für Excel)
- **PDF Export** - Professionell formatierte PDF mit Datum und Schnitt
- **CSV Import** - Noten aus Dateien wiederherstellen

#### Zusätzliche Features
- **Gesamtschnitt** - Automatische Berechnung des Durchschnitts über alle Fächer
- **Dark Mode** - Theme-Wechsel zwischen Hell und Dunkel
- **Lokale Speicherung** - Alle Daten werden lokal im Browser gespeichert (keine Cloud-Abhängigkeit)
- **Responsive Design** - Perfekt auf Mobile, Tablet und Desktop

## Technologie

### Frontend
- **HTML5** - Strukturierung
- **CSS3** - Styling mit CSS-Variablen für Theme-Management
- **JavaScript (ES6+)** - Logik und Interaktivität
- **Lucide Icons** - Moderne Icon-Bibliothek

### Libraries
- `html2pdf.js` - PDF-Generierung direkt im Browser
- `Lucide Icons` - Hochwertige SVG-Icons

### Speicherung
- **localStorage** - Persistente Speicherung aller Daten lokal im Browser
- Keine externe Datenbank notwendig

## Installation & Nutzung

### Browser öffnen
1. Clone oder Download dieses Repositories
2. Öffne eine der HTML-Dateien direkt im Browser:
   - `index.html` - Startseite
   - `stundenplan.html` - Stundenplan
   - `klausurenplan.html` - Klausurenplan
   - `notenrechner.html` - Notenrechner

Keine Installation oder Server-Setup erforderlich!

### Notenrechner - Schnellstart
1. **Fach erstellen:** Klick auf das `+` Icon in den Fächer-Tabs
2. **Noten eingeben:** 
   - Nutze vordefinierte Kategorien oder füge manuell Einträge hinzu
   - Gib Note (1-6) und Gewicht ein
3. **Schnitt berechnen:** Wird automatisch aktualisiert
4. **Exportieren:** CSV für Tabellenkalkulation oder PDF zum Ausdrucken

### Daten sichern
- **CSV Import/Export** nutzen, um Daten zu sichern oder zwischen Geräten zu übertragen
- Lokale Daten bleiben auch nach Browser-Neustart erhalten

## Projektstruktur

```
stundenplan-site/
├── index.html           # Startseite / Navigation
├── stundenplan.html     # Stundenplan-Seite
├── klausurenplan.html   # Klausurenplan-Seite
├── notenrechner.html    # Notenrechner (Hauptfeature)
├── style.css            # Gemeinsames Stylesheet
├── data.js              # Gemeinsame Daten (Klassen, Fächer, Klausurtermine)
├── favicon.svg          # Website-Icon
├── README.md            # Diese Datei
├── PDF-Dateien          # Stundenplan und Klausurenplan als PDF
└── legacy/              # Vorherige Version der Seite (Archiv)
```

## Features im Detail

### Light/Dark Mode
- Automatische Erkennung der Systemeinstellung
- Manueller Theme-Wechsel via Button
- Speicherung der Präferenz

### Responsive Design
- Mobile-first Ansatz
- Optimiert für alle Bildschirmgrößen
- Touch-freundliche Bedienung

### Offline-Fähigkeit
- Funktioniert vollständig offline
- Keine Internet-Verbindung nach dem Laden erforderlich
- Alle Daten lokal gespeichert

## Browser-Kompatibilität

Unterstützt alle modernen Browser:
- ✅ Chrome/Edge (ab v90)
- ✅ Firefox (ab v88)
- ✅ Safari (ab v14)
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## Lizenz

Dieses Projekt ist für Schulzwecke gedacht.

## Support

Fragen oder Probleme? Erstelle bitte ein Issue im GitHub Repository.

---

**Made with ❤️ für Schüler der IFB**
