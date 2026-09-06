# Mojo Manor journal and local-guide publishing plan

Prepared by **Codex Astra 6**, 2026-09-06. Coordinate implementation with the Mac through `ariamojomarketing-cpu/brain-vault` and its `Projects/MojoManor/Publishing-Launch-Checklist-2026-09-05.md`. This is an editorial plan; no additional scheduler, social publisher or newsletter campaign was enabled by the website release.

## Implemented in the website release

- A shared Mojo header, animated medallion, forest/ivory styling and booking navigation across the gallery, rates, privacy page, Local Guide, journal and all 12 existing articles.
- Topic filters and server-rendered journal cards. Article URLs remain unchanged.
- `content/journal.json` is the article index. Run `node scripts/build-journal.cjs` after editing it. The script validates local image paths and article files, then updates the journal cards, related-card photos, article hero/share images, Blog schema and `/feed.xml`. It does not write or publish article copy and does not update the sitemap automatically.
- Corrected broken/mismatched article photo mappings using existing assets. Removed several visibly unrelated Local Guide images (for example, a skier used for gem mining). Full licensing/source provenance for inherited destination imagery remains part of the editorial audit; filenames are not proof of location or rights.
- Local Guide links to current NPS road/park conditions and positions the home correctly: a residential Waynesville setting about one mile from downtown.
- Main page/gallery property presentation uses 4 bedrooms, up to 10 guests and 2.5 bathrooms. AI-edited feature images remain visibly labelled, with original photographs accessible. New real nighttime photos should eventually replace concepts.

## Editorial roles

Homepage: sell the stay through the actual house, clear amenities, location and booking access.

Local Guide (`/local-guide`): a concise, maintained directory for deciding what to do. Keep useful categories, links to businesses/parks, route planning and links to fuller journal articles. Do not turn this into another stream of overlapping posts.

Travel journal (`/blog/`, WNC Insider): answer one useful guest question per article, using specific local facts and a natural invitation to stay. Refresh existing URLs when they already cover the topic.

Gallery and Rates & Policies: practical evidence and booking reassurance. Keep layout, room descriptions, pet policy, cancellation terms and the live booking engine consistent. Booking-engine totals remain authoritative.

## Cadence and first month — proposed

Two substantial article releases or refreshes per month, a short weekly factual/link check, and a monthly performance review. This matches the Mac's existing plan. Three social posts per week can draw on these articles and actual property photos through the separately coordinated marketing workflow.

| Timing | Article work | Required verification |
| --- | --- | --- |
| Week of Sep 7 | Refresh `/blog/fall-foliage-waynesville-nc` | Current park/road access, realistic seasonal uncertainty, original image provenance, remove unsupported first-person experience and guaranteed-color claims |
| Week of Sep 14 | Refresh `/blog/waynesville-nc-fall-events-2026` | Organizer event dates/status, links, current availability before advertising a specific stay; retain original publication date |
| Week of Sep 21 | Maintain Local Guide and improve links from existing articles | Business identity/hours, outdated place names, travel-time and walkability claims, remaining inherited stock photos |
| Week of Sep 28 | Review search queries and guest questions; select October's two article slots | Search Console/analytics data if available; no duplicate competing article on an existing topic |

Possible later topics: a rainy-day itinerary, an in-town winter weekend, and a renovation story pairing Jake's verified before/current photos. These are candidates, not commissioned or published articles. Current existing hiking, waterfalls, family, brewery, dog-friendly, group and Asheville guides should be audited before creating similar articles.

## One publication owner

The Brain records overlapping Aria/Mac and Windows blog/social automations. Inventory their next runs and destinations, then choose one publication owner per channel before cutover. Do not add another scheduler on top of them. Existing owner's publishing authority and Jake's instructions govern release; this document does not invent a new approval requirement. Record the chosen owner and job IDs in Brain when cutover actually occurs.

## Repeatable article release

1. Pull the website and Brain repositories; inspect the current article inventory and pending campaigns. Work in a `codex/` branch.
2. Choose the existing URL or a distinct unmet reader need. Check current facts using primary sources: park agencies, event organizers and business websites. Store source links and verification dates in the campaign note. Do not invent host experience or infer destination identity from a filename.
3. Edit/create the article using `blog/post-template.html`. Replace every placeholder. Give it a unique title/description, canonical URL, one H1, appropriate Article markup, accessible headings and useful links to the Guide, related articles and the house.
4. Use owned/licensed, relevant photographs with appropriate crops and accurate alt text. Optimise new media for phone loading. Retain original publication dates; update visible modification date and structured data only when the article changes substantively. Update the article's sitemap lastmod honestly.
5. Add/update `content/journal.json`, run `node scripts/build-journal.cjs`, and inspect the actual desktop/mobile page, card, related links, share image, RSS and sitemap. Check the booking invitation without submitting a reservation. Never claim live availability from an old calendar snapshot.
6. Publish through the established Cloudflare Pages production path. Verify the live article and record branch, commit, URL and verified sources in Brain. Generate social drafts from the same facts and media through the single marketing owner.
7. Review useful search impressions/clicks, engaged reading, booking-button actions and attributable reservations after enough data. Track completed bookings only through a verified provider integration; a button click is not a reservation. No ranking or revenue guarantee is implied.

## Current limitations and priorities

This launch primarily changes design, imagery mapping and navigation. Existing article bodies retain older research and still need the scheduled factual/editorial audit. Do not describe all 12 guides as freshly fact-checked. Existing newsletter signup is retained, but delivery and subscriber-account ownership were not tested; no marketing email was sent. Production analytics IDs and PPC attribution remain in place, but field conversion delivery and Core Web Vitals need post-launch measurement.

Primary references: [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Blue Ridge Parkway current road status](https://www.nps.gov/blri/planyourvisit/roadclosures.htm), [Great Smoky Mountains current conditions](https://www.nps.gov/grsm/planyourvisit/conditions.htm). Park links checked 2026-09-06; conditions change.
