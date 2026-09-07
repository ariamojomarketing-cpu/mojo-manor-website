# September 7, 2026 — existing guide accuracy release

Prepared by **Codex Astra 6** on `codex/manor-guide-accuracy`, based on production `e3adcac652a6a8e552e150c458e1adc8844e2c94`. Publication status and final commit are recorded in Brain's desktop handoff after production readback.

## Implemented in this release

Nine existing article bodies receive full planning/accuracy refreshes; none is a newly published article. The original publication dates and canonical URLs remain intact. Visible and structured modification dates are September 7. The three September 6 article bodies are preserved.

| Existing URL | Useful correction |
| --- | --- |
| `/blog/spring-waynesville-nc` | Evergreen seasonal framing, real market location and hours, current Parkway checks, coffeehouse identity; removes blanket opening and scarcity claims. |
| `/blog/waynesville-nc-breweries-guide` | Panacea is a coffeehouse, not a brewery; Boojum restaurant versus 21+ Gem, Frog Level food, current BearWaters Bistro in Maggie Valley. |
| `/blog/soco-falls-waynesville-nc-hike` | Correct US-19 approach between Maggie Valley and Cherokee, maintained viewing route, realistic access and outing planning. |
| `/blog/best-hikes-near-waynesville-nc` | Eight options compared by route and effort; correct Looking Glass Rock one-way/return distance, viewpoints separated from summit walks. |
| `/blog/best-waterfalls-near-waynesville-nc` | Nine falls grouped into five travel corridors; Mingo steps, Moore Cove return distance, Dry Falls overlook versus walk-behind trail, no blanket under-an-hour promises. |
| `/blog/great-smoky-mountains-from-waynesville` | Choose one park region; correct Alum Cave 4.6-mile round trip, Kuwohi approach and physical parking tags; removes unsupported Cataloochee timed-entry claim. |
| `/blog/asheville-day-trip-from-waynesville` | Three focused day plans, timed Biltmore house entry, individual RAD studio hours, current parking/visitor links; removes stale prices and venue assumptions. |
| `/blog/things-to-do-waynesville-nc-families` | Actual house stairs and bathrooms, Cherokee museum identity, separate Tube World location and main-hill height requirement, practical family pacing. |
| `/blog/group-vacation-rentals-waynesville-nc` | Four upstairs bedrooms plus shared game-room futon, two full baths upstairs/half bath downstairs, ten registered guests, no parties, actual dog policy and full quote. |

`content/journal.json` synchronizes related titles, descriptions, image mappings, schema, RSS and sitemap. All 12 journal entries remain; the homepage's three featured cards and `/old/` are unchanged.

## Image loading and verified attribution

The inherited `soco-autumn.jpg` and `soco-falls-waynesville-nc-hike.jpg` are byte-identical 18,240,974-byte originals. Their SHA-1 is `00fd28648ac355f038aa890aff8a229e64ff3355`, matching the [Wikimedia source record](https://commons.wikimedia.org/wiki/File:Soco_falls_in_Autumn_colors.jpg): **Andrew Heneen**, October 28, 2023, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The inherited Fredlyfish4/2020 credit referred to a different photograph and is corrected.

Both articles, their journal/related cards and share metadata now use `Images/blog/soco-autumn-1600.webp`, 681,030 bytes, **96.27% smaller**. Resizing/compression preserve the photograph; an explicit crop position favors the falls and foliage. Linked credit and adaptation information appear below each hero and on the journal index. Original files remain for historical references. This verifies this photograph only, not all inherited imagery.

## Sources checked September 7

- [Cherokee waterfall visitor guidance](https://visitcherokeenc.com/play/outdoor-adventure/waterfalls/): Soco approach and Mingo steps.
- [Blue Ridge Parkway road status](https://www.nps.gov/blri/planyourvisit/roadclosures.htm), [NC trail list](https://www.nps.gov/blri/planyourvisit/nc-trails.htm), [Waterrock Knob trail](https://www.nps.gov/places/waterrock-knob-viewpoint-and-trail.htm).
- [Smokies conditions](https://www.nps.gov/grsm/planyourvisit/conditions.htm), [parking requirements](https://www.nps.gov/grsm/planyourvisit/fees.htm), [wildlife guidance](https://www.nps.gov/grsm/planyourvisit/wildlifeviewing.htm), [Alum Cave Bluffs](https://www.nps.gov/thingstodo/alum-cave-to-the-bluffs.htm), [Kuwohi](https://www.nps.gov/places/kuwohi-observation-tower.htm).
- [Looking Glass Falls](https://www.nps.gov/places/looking-glass-falls.htm), [Moore Cove](https://home.nps.gov/places/moore-cove-falls.htm), [Forest Service trail guide](https://www.fs.usda.gov/media/241204) for route descriptions, not current opening proof; [Dry Falls visitor pass](https://www.recreation.gov/activitypass/e1005b19-5204-11eb-bb2c-22490c04b0d4), [Sunburst Falls](https://visithaywood.com/listings/sunburst-falls/), [Max Patch stewardship](https://www.maxpatch.org/visit).
- [Panacea](https://www.panaceacoffee.com/pages/coffee-house-cafe-and-roastery), [Boojum](https://www.boojumbrewing.com/), [Frog Level](https://www.froglevelbrewing.com/), [BearWaters Bistro](https://www.bearwatersbistro.com/), [Haywood's Historic Farmers Market](https://waynesvillefarmersmarket.com/).
- [Museum of the Cherokee People](https://motcp.org/), [Tube World](https://cataloochee.com/tube-world/), [Biltmore visitor information](https://www.biltmore.com/help-center/visitor-information/), [River Arts District](https://www.riverartsdistrict.com/faqs/), [NC Arboretum](https://ncarboretum.org/plan-a-visit/), [Asheville parking](https://www.ashevillenc.gov/service/park-in-a-parking-garage/).

## Validation and release boundary

Source validation covers all 12 articles: original URLs/dates, one H1 each, parseable Article metadata, indexed production pages, local links and fragment targets, and an idempotent journal build. The three prior refreshed bodies, homepage and `/old/` are unchanged. All nine revised articles were checked at 390px and 1440px widths for overflow, headings and table-of-contents targets; the optimized image and booking entry receive a final browser check. No reservation is submitted.

The release updates `PUBLISHING-PLAN.md` to the Mac's existing six-new-article queue and weekly social cadence. It does not create a scheduler, publish those six drafts, enable social delivery, or change YouTube. Post-outage Mac editorial execution and private Studio settings remain unverified.

Rollback: use a normal Git revert of this release commit, preserving any newer Mac work. The existing homepage archive and `pre-redesign-2026-09-06` tag remain available separately.
