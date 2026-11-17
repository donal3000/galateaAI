# GalateaAI website handover

Updated 17 November 2026.

## Final live state

The live website contains the owner's final agreed homepage changes. Do not roll it back to its earlier layout.

All three languages use this order:
1. Hero.
2. General AI and robotics introduction, with the selected consultants-and-robot image and no introduction buttons.
3. Services, with six circles and corrected text wrapping.
4. Dedicated Local AI section, with the selected researcher-and-computer image.
5. Lisa.
6. Existing team and contact sections.

The original fonts and shared styles are retained. Introductory sections use the original cream background. Local AI setup includes own-premises or secure private-cloud deployment. Connections include internal documents, databases, apps and Microsoft Office. The practical list also covers automation, market monitoring, training and planning.

Selected homepage images:
- `img/general-ai-consulting-20261117.png`
- `img/local-ai-researcher-20261117.png`

## Projects restoration

An earlier update mistakenly published simplified example project pages. This was corrected.

The Projects overview now has its original text and original Local AI and Lisa pictures. Avatar's Discover and Demo buttons have added spacing and wrapping.

The Local AI detail pages in German, English and Chinese match their versions before today's homepage changes. They include the original shield/server image and detailed app, separate market crawler and protected data-flow content. Avatar detail pages were not changed.

“Restored” refers to these project pages and the original font setup. Today's agreed homepage changes remain live.

## Demo pages and Chinese viewers

In all three languages, the song follows the five emotional interviews. Existing video IDs were retained.

The existing `demo.js` includes Bilibili mappings and routes Chinese-language pages and China time zones to Bilibili. Preserve this implementation. An incorrect China-access notice added during the update was removed.

Consent behavior and locally hosted font files are retained.

## Generated images

All 23 original generated PNGs available from this chat are stored under `pictures`:
- `local-ai`: ten Local AI options generated on 17 November.
- `general-ai`: ten General AI options generated on 17 November.
- `earlier`: three images generated on 29 September.

`pictures/manifest.json` records original generated filenames and SHA-256 checksums. Images were preserved without recompression and checked against the committed Git objects. Selected homepage assets are also stored under `img`.

Archive commits:
- `63922d0`: Local AI and earlier images.
- `9267a67`: General AI images, manifest and work summary.

The final selected-image and layout commit was `cbf38b3`.

## Verification and limits

The final three homepages and both selected assets were checked against the live website. The six restored project files were checked live. A broader check of 38 top-level non-preview HTML/CSS/JS files matched the audited repository before the final wording and image updates.

Not every screen size has been visually tested. Playback from a mainland-China network was not physically tested. The separate Keynote full-screen video-link issue remains unresolved and is outside this website repository.

## Rules for subsequent work

Read the current Git and live versions before editing. Use plain English and verified facts. Preserve the original design, fonts, unrelated content and assets. Make only changes requested by the owner. Keep revisions local for review when requested, and publish only the approved scope. Verify live publication separately from a successful Git push. Avoid unnecessary file duplication.

The longer record is in `WORK-SUMMARY-20261117.md`.
