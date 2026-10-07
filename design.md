# Galatea AI – Design System

Abgeleitet aus der Website „Galatea AI Beratung“. Tonalität: wissenschaftlich, elegant, warm. Kursive Serifen-Überschriften auf ruhigen Flächen in Marineblau, Creme, Himmelblau und Pfirsich.

## 1. Designprinzipien

- **Editorial statt Tech-Look:** Große kursive Serifenüberschriften geben Autorität und Wärme.
- **Ruhige Flächen:** Großzügiger Weißraum, weiche Verläufe, runde Formen (Kreise, Pills, 20 px Radien).
- **Sparsame Akzente:** Burgunder nur für Schlüsselwörter, Icons-Pfeile und primäre CTAs.
- **Wechsel der Sektionen:** Hero (Navy) → Creme → Himmelblau → Creme → Pfirsich → Footer (Navy).

## 2. Farben

| Token | Hex | Verwendung |
|---|---|---|
| `--navy-900` | `#1F2350` | Hero-Hintergrund, Navigation |
| `--navy-700` | `#2B2F6B` | Überschriften, Standardtext, Footer, Icon-Kreise |
| `--navy-500` | `#4A4F8C` | Sekundärelemente |
| `--sky-300` | `#9FB9DA` | Leistungsband (Verlauf oben) |
| `--sky-100` | `#D3E0F0` | Leistungsband (Verlauf unten) |
| `--cream` | `#F7F0EC` | Standard-Seitenhintergrund |
| `--peach-300` | `#E9C2B3` | Kontaktband, Verlauf |
| `--peach-500` | `#DDA993` | Button in der Navigation / Hero |
| `--burgundy` | `#8A1F4B` | Akzentwörter, Pfeil-Icons, Kontakt-CTA |
| `--white` | `#FFFFFF` | Karten |
| `--text-muted` | `#6B6F8F` | Fließtext, Tags |
| `--border` | `#DAD5E3` | Trennlinien, Tag-Rahmen |

Hinweis: Die Werte sind per Augenmaß aus dem Screenshot bestimmt und sollten bei Bedarf mit den Originaldateien abgeglichen werden.

## 3. Typografie

- **Display:** Playfair Display, Italic, Regular (400)
- **Body/UI:** Inter (400, 500, 600)

| Stil | Größe / Zeilenhöhe | Schrift | Einsatz |
|---|---|---|---|
| Hero | 72 / 1.1 | Playfair Italic | Hero-Headline |
| Section | 48 / 1.1 | Playfair Italic | Sektionstitel |
| Card | 28 / 1.1 | Playfair Italic | Namen, Kartentitel |
| Small | 20–22 / 1.25 | Playfair Italic | Leistungskreise |
| Body | 16 / 1.6 | Inter 400 | Fließtext, Farbe `--text-muted` |
| UI | 14 / 1.4 | Inter 500 | Buttons, Navigation |
| Eyebrow | 11, Versalien, Laufweite .18em | Inter 500 | Sektionslabels mit 28 px Linie davor |
| Rolle | 10, Versalien, Laufweite .1em | Inter 600 | Rollen auf Teamkarten |

Hervorhebung: Einzelne Schlüsselwörter in Überschriften erhalten `--burgundy` (z. B. „Automatisierung“, „KI-Roadmaps“).

## 4. Abstände

Basis 4 px: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96. Sektions-Padding vertikal 96 px, Seitenrand 24–48 px, Container max. 1100–1200 px.

## 5. Radien & Schatten

- Radien: `8` (klein), `20` (Karten), `28` (große Bänder), `999` (Pills/Buttons/Tags), `50%` (Kreise)
- Schatten: `soft` 0 6 18 rgba(43,47,107,.08) · `card` 0 12 32 rgba(43,47,107,.12)

## 6. Komponenten

**Navigation:** Navy-900, Logo links (Wortmarke + G-Symbol), Links in 13 px Inter 500 weiß, rechts Pfirsich-Pill-Button mit ↗.

**Buttons:** Pill (999 px), Padding 12 × 22, Inter 500 14 px, Pfeil-Icon ↗.
- *Peach:* `--peach-500` auf Navy-Text (Navigation, Hero)
- *Burgundy:* `--burgundy` mit weißem Text (Kontakt-CTA)
- *Outline:* 1 px Navy

**Eyebrow:** Kurze Linie + Versalien-Label in Navy (oder Pfirsich auf dunklem Grund).

**Tags:** Pill, 1 px `--border`, 11 px, halbtransparentes Weiß.

**Badge:** Weiße Pill, 10 px Versalien, auf Fotos links unten.

**Hero:** Navy-Verlauf mit Frost-/Federtextur, links Eyebrow, Headline, Text, Button + Kurzzeile; rechts kreisförmiges Key Visual mit feinem Ring. Bildhinweis „Key visual human-conceived and AI-generated“.

**Profil-Sektion:** Creme, Headline 48 px links, Text darunter, Tags; rechts abgerundetes Bild (20 px) auf pfirsichfarbenem Radial-Glow.

**Leistungskreise:** Weiße Kreise (≈ 240 px) auf Himmelblau-Verlauf, überlappender Navy-Kreis (84 px) mit weißem Linien-Icon oben, zentrierter kursiver Titel, Schlüsselwort Burgunder. Anordnung 3 + 2 zentriert.

**Teamkarte:** Weiß, Radius 20, Foto oben (≈ 220 px) mit Badge, darunter Name (Playfair Italic) + Burgunder-Pfeil, Rolle in Versalien, Trennlinie, Kurzbiografie 13 px Muted. Schatten `card`.

**Kontaktband:** Pfirsich-nach-Creme-Verlauf, links große Headline, rechts Frage + Burgunder-Button, darunter Tags.

**Footer:** Navy-700, 3 Spalten (Logo + Hinweis, Firmendaten, Haftungshinweis), Fließtext weiß mit 65 % Deckkraft, Copyright-Zeile mit Trennlinie.

## 7. Layout

- Raster: 12 Spalten, Desktop-Container ≈ 1100–1200 px
- Zweispaltige Bereiche (Hero, Profil, Kontakt): Text links, Visual/Aktion rechts
- Mobil: einspaltig, Headline-Größen skalieren (Hero ≈ 44, Section ≈ 34)

## 8. Bildsprache

Weiche, helle Fotografie mit warmer Pfirsich-/Blau-Stimmung; runde Ausschnitte (Kreis im Hero), abgerundete Rechtecke sonst. Porträts mit dunkel-teal Hintergrund, professionell und nahbar.

## 9. Barrierefreiheit

- Weißer Text auf Navy und Burgunder erfüllt AA; Pfirsich-Buttons mit dunklem Navy-Text verwenden
- Muted-Text (`#6B6F8F`) nur ab 14 px auf Creme/Weiß einsetzen
- Fokuszustände mit 2 px Burgunder-Outline ergänzen

## 10. Dateien

- `design-system.html` – visuelle Referenz mit CSS-Variablen und allen Komponenten
