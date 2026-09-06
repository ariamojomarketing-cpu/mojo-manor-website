# Manor signature motion

Author: **Codex Astra 6**. September 6, 2026. Owner accepted the proposed custom Manor/Mojo arrival animation, gentle scroll reveals, location-section mountain linework and shorter homepage blog headlines.

## Included

- Small bronze illustration based on the owned `Images/redesign/exterior-1600.webp`: actual main roof, two upper windows, front porch and adjoining double garage. It is an illustrative brand drawing, not a measured architectural plan. Source SVG is `Images/redesign/manor-signature.svg`; the decorative homepage copy embeds it with the existing Mojo crest.
- A finite stroke reveal, then a brief seal highlight. The homepage's previously continuous medallion-rim rotation becomes a single welcome gesture. Total welcome sequence finishes within about 2.5 seconds.
- One-time, 14px/620ms reveals for selected headings, photos, cards and review excerpts. The hero photograph settles from 1.018 scale to 1 over 1.5 seconds. Content remains visible at all times and with JavaScript disabled.
- Symbolic mountain linework beside the location story, where the in-town setting is explained. Its two lines draw once; this is not a route map or a depiction of the property's view.
- `homepageTitle` optionally supplies the shorter featured-card label in `content/journal.json`. Full article titles, URLs, article bodies and publication dates stay as before. Three handpicked homepage features; the complete journal still holds all 12 articles. Future publishing must preserve this optional field.

## Validation

Desktop/phone visual inspection and 320/390/768/1024/1440 width checks passed without horizontal overflow. The illustration and hero booking button are visible; both line sequences animate and settle, and the location sequence does not replay when revisited. Gallery, booking and film dialogs still open/close. No page JavaScript errors were observed.

Initial reduced-motion preference skips all new motion. Changing that preference during a sequence cancels running animations and disconnects future triggers. Without JavaScript, text, photos, blog links and finished illustrations remain visible. All animations are finite; no animation library, scroll handler, scroll lock or new media download is used for these effects. New JS/CSS total about 5.4 KB uncompressed; drawing markup about 1.9 KB before the small crest addition.

Evidence and a live readback are published through the Brain handoff after deployment. Source branch: `codex/manor-signature-motion`, based on `03b6336b5ada84830b7c0fbf0cb8d231cf64994d`. To roll back this refinement, revert its implementation commit; `/old/` and tag `pre-redesign-2026-09-06` continue to preserve the original design.
