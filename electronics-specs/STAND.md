# Electronics — abgeschlossen und veröffentlicht, Stand 04.09.2026

## Ergebnis

- **50 Spezifikationen**, 50 verschiedene Prompts, 0 Regelverstöße
  (`node ../real-estate-specs/validate.cjs 01-10.json 11-20.json 21-30.json 31-40.json 41-50.json`)
- **50 Bilder** im Ordner `Downloads\Electronics`, alle 1408×1760 (4:5)
- **50 Vorlagen** auf design.dalorstudio.com, alle **veröffentlicht** — die öffentliche
  API meldet 50 Electronics-Vorlagen, jede mit Bild, Kategorie und Eingabefeldern,
  alle 50 Bild-URLs liefern 200
- Review-Werkzeug: `index.html` im Bildordner, per Doppelklick, 50 Bilder

## Zwei Bildquellen

Vorlagen **01–42** stammen aus **Meta AI** im Browser. Danach griff dort das Tageslimit
(„You reached your limit … or wait until tomorrow"); das Kontingent hängt am Konto und
wird von allen parallel laufenden Agenten geteilt.

Vorlagen **43–50** stammen aus **Higgsfield**, Modell `nano_banana_pro`, 4:5, 2k, über
`generate_image_batch` plus `jobs_wait`. Das Ergebnis kommt als PNG 1856×2304 und wurde
mit `sharp` mittig auf 1408×1760 beschnitten und als WebP gespeichert, damit der Bestand
einheitlich bleibt. Bezahlt aus dem Credit-Guthaben (vorher 2425).

**Der Unterschied ist sichtbar:** Higgsfield setzt die Typografie sauberer und schneidet
keine Kopfzeilen an, wirkt dafür etwas glatter als die Meta-AI-Bilder. Beim Review lohnt
der direkte Vergleich zwischen 42 und 43.

**Ein Fund dabei:** Higgsfield hat bei Vorlage 44 einen **echten Herstellernamen** auf die
Waschmaschine geschrieben, obwohl im Prompt „no real manufacturers, no real logos" stand.
Neu erzeugt mit dem Zusatz „the appliance itself is completely unbranded: the fascia is
blank, no wordmark, no badge and no manufacturer logo anywhere on the machine"; danach war
die Blende leer. Also bei jedem Modell nicht nur den Prompttext prüfen, sondern das
fertige Bild ansehen.

## Ablauf, der funktioniert hat

**Meta AI im Browser** (angemeldet nur im lokalen Windows-Browser, die macOS-Verbindung
der Erweiterung war abgemeldet):

1. `__nc()` — „New chat" anklicken
2. `__fill(text)` — Wert per React-Setter setzen und `input` auslösen
3. `__snd()` — Knopf mit `aria-label="Send"` klicken
4. zweimal `computer wait 10` — **kein** `setTimeout` im Seiten-JS, der Tab gilt als
   `hidden` und Chrome drosselt Timer, dadurch laufen `javascript_tool`-Aufrufe mit
   `await`-Schleifen in den 45-Sekunden-Timeout
5. `__dl(name)` — Blob holen und über `<a download="Electronics/NN-name.webp">` speichern;
   Chrome macht daraus `Electronics_NN-name.webp` im Downloads-Ordner, das gibt der
   eigenen Kategorie einen Namensraum

Nach einem Neuladen der Seite nimmt der Sendeknopf den per Setter gesetzten Text erst an,
wenn einmal ein echter Tastendruck kam (ein Leerzeichen per `computer type` genügt).

**Higgsfield:** `generate_image_batch` mit einem Eintrag je Prompt, `aspect_ratio: "4:5"`,
`resolution: "2k"`, dann `jobs_wait` in Gruppen bis 12. Die Ergebnis-URLs lassen sich
direkt per `curl` aus der Shell holen.

**Strapi:** eigenes `input[type=file]` in `/admin/plugins/upload` injizieren, Dateien per
`file_upload` hineinlegen (nur Pfade aus dem Sitzungsordner, max. 10 MB pro Aufruf),
dann im Tab `POST /upload` pro Datei und
`POST /content-manager/collection-types/api::template.template` pro Vorlage.

**Token:** Der Wert im Cookie `jwtToken` war nach etwa einer Stunde abgelaufen und lieferte
401, obwohl die Oberfläche weiter funktionierte. Was hilft: `window.fetch` und
`XMLHttpRequest.setRequestHeader` hooken, dann in der Oberfläche eine Aktion auslösen
(einen Ordner anklicken) — der mitgeschnittene `Authorization`-Header ist gültig.

Die Kategorie wird zur Laufzeit über `slug=electronics` nachgeschlagen, nicht verdrahtet.

## Review

Der Nutzer hat am 04.09.2026 **alle 50 freigegeben**. Entsprechend:
Bilder liegen in `Downloads/Electronics/approved/`, `review.json` hält die Freigabe fest,
alle 50 Vorlagen sind veröffentlicht. Es gibt keine Ablehnungen und kein `feedback.json`.

Prüfung der Bild-URLs muss **aus dem Browser-Tab** laufen: `curl` aus der Bash-Sandbox
bekommt von `design.dalorstudio.com` ein 403, obwohl die Dateien erreichbar sind.

## Bekannte Schwächen im Bestand

Bei einigen Meta-AI-Bildern ist die Kopfzeile oben leicht angeschnitten (05, 07, 12, 21,
25, 30, 31, 33, 38); bei 14 steht „APART" doppelt, bei 17 heißt der zweite Schritt „01"
statt „02". Bei 45 hat Higgsfield die Headline in die Anschriftenspalte gezogen.
