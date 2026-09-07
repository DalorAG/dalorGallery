# Seasonal — Stand 04.09.2026

50 Vorlagen liegen als **Entwurf** in Strapi (`design.dalorstudio.com`), Kategorie
**Seasonal** (`slug: seasonal`). Slugs: `seasonal-*`. Nichts ist veröffentlicht.

## Was fertig ist

- 50 Bilder in `C:\Users\User\Downloads\Seasonal`, alle 1408×1760 (4:5), WebP.
- 50 Medien in Strapi hochgeladen, jede Vorlage genau mit ihrem Bild verknüpft.
- 50 unterschiedliche Prompts, jeder endet auf einer Leerzeile plus
  `{{image_description}}`. 7–9 Eingabefelder je Vorlage (6–8 inhaltliche Variablen
  plus `image_description`), keine Waisen in beide Richtungen.
- `autoTranslate = 1`, nur englische Texte.
- Review-Werkzeug `index.html` liegt im Bildordner, per Doppelklick öffenbar.

## Aufteilung

| Anlass | Vorlagen | davon mit Text | davon nur Marke |
|---|---|---|---|
| Christmas | 6 | 3 | 3 |
| Black Friday | 6 | 3 | 3 |
| New Year | 5 | 3 | 2 |
| Halloween | 5 | 2 | 3 |
| Cyber Monday | 4 | 2 | 2 |
| Winter Sale | 4 | 2 | 2 |
| Valentine's Day | 4 | 2 | 2 |
| Easter | 4 | 2 | 2 |
| Anniversary | 2 | 1 | 1 |
| Grand Opening | 2 | 1 | 1 |
| Mother's Day | 3 | 2 | 1 |
| Summer Sale | 3 | 1 | 2 |
| Back to School | 2 | 1 | 1 |
| **Summe** | **50** | **25** | **25** |

## Bildquellen

- 01–05, 11–20: Meta AI (Browser).
- 06–10, 21–50: Higgsfield `nano_banana_pro`, 4:5, 2k — Meta AI hatte am
  04.09.2026 sein Tageskontingent erreicht. Vom Nutzer freigegeben.

## Was noch aussteht

1. Ordner als ZIP an den Reviewer geben, `index.html` doppelklicken.
2. `review.json` zurücknehmen:
   - **approved** → Bild nach `approved/`, Vorlage in Strapi veröffentlichen.
   - **rejected** → Bild nach `rejected/`, Kritik in `feedback.json`,
     Vorlage bleibt Entwurf.
