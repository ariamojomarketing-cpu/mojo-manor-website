# Mojo Manor audit completion and film release

**Author: Codex Astra 6.** Branch: `codex/manor-completion-video`. Base: `6844e3844717f8620009d1edc6e4669a953ee13d`. Owner authorization: “go ahead and button up,” with YouTube video `8DX7RP8Gfgk`.

## Included in this release

| Audit area | Change and purpose |
| --- | --- |
| G01/G02/G09: decision-making detail | Restored visible arrival/departure, six-car parking, pet limits/fees, baby equipment, fireplace, karaoke, table tennis, kitchen/coffee and outdoor games. Explains the downstairs futon so ten-person capacity is understandable. |
| G03/G04: pricing/policies | Removed a static $350 lead price and contradictory seasonal minimum-stay/cancellation tables. Shows known fees and directs guests to the itemized date-based quote for current totals, payment and refund deadlines. Light checkout matches owner instructions. |
| G05: trust | Four existing review excerpts independently matched against the public Airbnb listing; source/rating link and host context restored. Does not relabel OTA reviews as direct-booking reviews. |
| G06/G07: booking and links | Production analytics initializes before the query-triggered booking open. Restores old Amenities/Intro fragments and corrects the map link. |
| G08: guides | Refreshes three existing guides: dogs, fall foliage and 2026 fall events. Official source links and actual modification dates; preserved original URLs/publication dates. Corrects selected Local Guide and Kuwohi/travel claims. |
| G10/G11: photos | One canonical 46-photo library on both pages: original 44 plus exterior and ensuite detail. Five bathroom photographs. Full-gallery categories, thumbnails, captions and focus-contained native dialogs replace the old viewer; originals and edited-feature disclosures remain. |
| G12: crawl quality | Adds a branded 404 document for Cloudflare Pages, updates article sitemap dates and includes `/tour`. Removes broken blog footer targets and normalizes article canonical/share URLs. |
| G13: film/social | Homepage and gallery click-to-play film, dedicated `/tour` watch page with VideoObject, Instagram/YouTube links and `/youtube` campaign redirect. |

## Validation before publishing

- 21 rendered pages, including all 12 existing articles, plus branded 404 document.
- 30 responsive route/viewport checks at 320, 390, 768, 1024 and 1440 pixels; no horizontal overflow.
- Internal rendered links, assets and fragment targets resolve; one H1 per page; JSON-LD parses; no page JavaScript errors.
- Both viewers have all 46 photos and five bathroom photos. Keyboard arrows, forward Tab containment, Escape and focus return checked. Every full-gallery image decodes.
- No homepage/gallery YouTube player before a click; close removes it. Network-enabled browser confirms successful embed playback and captions. Corrected the poster's inherited fixed image height after visual inspection.
- With local release files served at a simulated production origin and outbound analytics blocked, `?book=1` records one booking-open event and the following manual open increments it to two. This validates event dispatch, not backend analytics ingestion or paid reservations.
- JavaScript syntax and Git whitespace checks pass. Original `/old/` file, `scripts.js` and `styles.css` remain unchanged.

## Separate outstanding work

- **YouTube Studio:** `YOUTUBE-45S-SETUP.md` contains the public audit and ready-to-paste tracked description. Owner Studio session was unavailable. External booking address currently appears as unlinked text; check advanced-feature eligibility, save the description and verify clickability. Public tags, embedding and auto captions are verified; private audience/restriction settings are not.
- **G14 publishing:** `PUBLISHING-PLAN.md` records the three completed refreshes and the proposed ongoing cadence. No duplicate automation or newsletter send was created. Mac still needs to reconcile existing publication owners/jobs before declaring automatic publishing operational.
- **Booking channels:** Mac's business audit identified separate OTA pet, quiet-hours and sleeping-field conflicts. Website completion does not alter Airbnb/Vrbo/Lodgify backend settings. Exact commercial terms must be reconciled in their owner systems.
- **Content/media:** Remaining inherited articles and destination-image provenance still need editorial review. New real night photographs should replace labeled edited concepts when available. Newsletter delivery, completed-booking attribution and field performance were not established by this release.

## Deployment and rollback

Publish by pushing the verified site commit to `main` of `ariamojomarketing-cpu/mojo-manor-website`, which triggers Cloudflare Pages project `mojo-manor`. Do not use this repository's separate chat Worker deployment as the website deploy path. Verify the homepage, `/tour`, `/youtube`, original archive, refreshed guides and a random missing URL on the public domain after deployment.

To undo only this release, revert its implementation commit through Git. The archived old homepage remains at `/old/`; complete original sources remain in tag `pre-redesign-2026-09-06` (`115c6579647b8f9d3f7dadff3d5d5027d93bebe9`). No force-push is needed. Deployment hash and live readback belong in the Brain handoff after publishing.
