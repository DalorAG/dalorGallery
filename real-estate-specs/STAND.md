# Real Estate — abgeschlossen bis auf Vorlage 43

## Ergebnis auf design.dalorstudio.com

- **50 Vorlagen** in der Kategorie Real Estate, **49 veröffentlicht**, 1 (`43`) Entwurf
- Alle 50 Bilder neu hochgeladen und verknüpft, jede `/uploads/...`-URL liefert 200
- 50 verschiedene Prompts, alle auf dem Stand der Spezifikationen
- Alle Vorlagen mit Titel und Beschreibung in de/ru/hi/pa

## Bilder

`C:\Users\User\Downloads\Real-Estate\final\` — alle 50, einzeln gesichtet.
`fremd/` enthält die sieben Fremdmotive, die versehentlich hereingerutscht waren.

Ursache damals: „neueste Datei im Downloads-Ordner" nehmen, obwohl dort mehrere
Agenten parallel ablegen. Jetzt: Dateiliste vor dem Klick merken, danach Differenz
bilden, bei mehr als einer neuen Datei abbrechen. Meta AI liefert inzwischen `.jpg`.

## Upload-Weg auf den Host

Der `public/`-Umweg funktioniert dort nicht, und die Extension gibt das Admin-Token
nicht heraus. Stattdessen: per `javascript_tool` ein eigenes `<input type="file">` in
die Admin-Seite hängen, mit `file_upload` die Dateien hineinlegen (nur Pfade aus dem
Sitzungsordner werden akzeptiert, max. 10 MB pro Aufruf) und in der Seite selbst
`POST /upload` plus `PUT` auf die Vorlage ausführen. Das Token bleibt im Browser.

## Offen

- **Vorlage 43** (Carousel Cover): neue Fassung liegt in `final/`, wartet auf Freigabe
- Die automatische Übersetzung scheiterte bei `real-estate-just-listed-suburban-home`
  siebenmal in Folge; Titel und Beschreibung sind dort von Hand gesetzt
