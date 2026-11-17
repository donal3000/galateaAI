# Website work and status — 17 November 2026

## Current published homepage

German, English and Chinese share this order:
1. General AI and robotics introduction, using the selected consultants-and-robot image. Its two buttons were removed.
2. Services, with six areas and corrected text wrapping inside the circles.
3. Dedicated Local AI introduction, using the selected researcher-and-computer image.
4. Lisa, followed by the existing team and contact sections.

The original font loading and shared styles were restored from Git. Lisa uses the original cream background. Setup mentions own-premises or secure private-cloud deployment. Connections mention documents, databases, apps and Microsoft Office.

## Project pages

The original Projects overview text and pictures were restored in all three languages. Avatar's Discover and Demo buttons now have explicit spacing and wrap safely. Local AI detail pages match the version before today's changes, including the original shield/server image and the app, separate market crawler and protected data-flow content. Avatar detail pages were not changed.

## Demo pages and China

The five emotional interview demos appear before the song in all three languages. Existing video IDs and the Bilibili mappings were retained. `demo.js` routes Chinese-language visitors and China time zones to Bilibili. An incorrectly added China-access notice was removed. The original consent scripts and local font files are retained.

## Corrections made during this work

An initial release included simplified example Projects and Local AI detail pages. These were restored from the pre-change Git version. The supplied draft's font-loading setup was initially carried over and was replaced with the original site's setup. The incorrect China-access statement was corrected after inspecting the live Bilibili code.

## Verification and limitations

The three final homepage HTML files and both selected image assets were verified against the live site after publication. The restored six project files were verified live. A subsequent full live check found all 38 top-level non-preview HTML/CSS/JS files matched the audited Git snapshot. This preceded the later wording and selected-image updates. Not every screen size has been visually tested. Mainland-China network playback was not physically tested.

The selected-image batch initially paused because its PNG had unreadable file permissions for the publisher. The final combined image-and-layout batch used readable assets and was published successfully. The old failed batch remains paused and must not be resumed because it contains older homepage HTML.

## Picture archive

All 23 generated PNG files available in this chat's generated-image directory are archived under `pictures`, including today's ten Local AI and ten General AI options and three earlier images. Original filenames and checksums are in `pictures/manifest.json`. Selected homepage image files remain under `img`.

## Other work in this chat

English demos, the replacement German expression loop, the Future page and multilingual navigation were completed earlier. The Keynote slide link work remains a separate unfinished issue: full-screen clicking was not verified or repaired in the user's v3 Keynote deck. No Keynote files are included in this website commit.
