# Mojo Manor journal and local-guide publishing plan

Updated by **Codex Astra 6**, September 7, 2026. Coordinate through `ariamojomarketing-cpu/brain-vault`. The Mac's `Projects/MojoManor/Social-Campaign-2026-09/Setup-Status.md` and `Blog-Topic-Queue.md` are the current operational references. This document does not create a scheduler or enable social publication.

## Website roles and implemented foundation

- The homepage presents the house and booking journey, with three curated article previews. It is not the full article archive.
- `/blog/` (WNC Insider) contains all 12 existing articles with topic filters. Future articles belong here; feature a relevant selection on the homepage.
- `/local-guide` remains the concise attraction directory, linking to deeper journal advice and official visitor information.
- Gallery, film and Rates & Policies provide the room, amenity, layout and booking details that support each article's invitation to stay.
- The shared Mojo medallion, visual styling, navigation and booking access remain in place. The homepage's restrained welcome and scroll motion shipped separately at e3adcac. `/old/` retains the original homepage with noindex.
- September 6 refreshed dog-friendly, foliage and fall-events articles. The September 7 release refreshes the other nine existing article bodies, preserving their URLs and original publication dates. Related-card titles, modification dates, share metadata, RSS and sitemap are synchronized. See `2026-09-07-GUIDE-ACCURACY.md` for scope and sources.

## Current cadence and ownership

The Mac setup record reports one `com.codex.mojo-editorial` LaunchAgent, with article/editorial dispatch enabled and social publication disabled. It dispatches preparation 48 hours ahead, Monday reviews and scheduled releases through the existing Mac Codex task. A September 6 queue test was acknowledged. This Windows review has not verified a post-power-outage editorial run on the Mac; its separate Telegram recovery does not establish that.

**New articles:** every 14 days, Thursday at 10 AM Eastern, September 10–November 19. These are six complete drafts and scheduled release tasks, not already published pages.

| Date | New article |
| --- | --- |
| September 10 | A Slow Morning at Lake Junaluska, Then Back to Waynesville |
| September 24 | Coffee in Frog Level, a Browse on Main Street |
| October 8 | A Rainy Day in Waynesville |
| October 22 | A Waynesville Weekend Without a Packed Itinerary |
| November 5 | A Winter Weekend in Waynesville, Even If You Do Not Ski |
| November 19 | Make a Weekend of Holiday Shopping in Waynesville |

The two September references to existing foliage and events articles are reviews only. Preserve those pages and the September 7 corrections. Later brewery, family, waterfall and spring refresh candidates should add substantive current value to these existing URLs, not replay the earlier correction task.

**Social:** one core Wednesday post weekly, September 9–January 20, with Facebook at 9 AM and Instagram at 12:15 PM Eastern. An article may supply that week's topic without adding publication volume. Social activation still requires working Composio project API access and live confirmation of Facebook business Page 1052123634642557 and Instagram @mojomanorwaynesville. Dashboard connection status alone is insufficient. The legacy social owner remains in place until verified cutover; preserve unrelated X/Pinterest jobs. Do not add a Windows scheduler.

The Mac must be awake and online with its Codex task available. Late or uncertain dispatches are held. Check the current Mac status and receipts before describing the schedule as running after the outage.

## Repeatable article release

1. Pull fresh website and Brain repositories and inspect upcoming campaigns. Use a `codex/` branch. Choose an existing URL for a refresh or a distinct unanswered guest question for a new article.
2. Research current facts through attraction operators, park agencies and event organizers. Record URLs and check dates. Write useful trip advice with accurate property details and natural language; do not invent host visits or use publishing frequency as a ranking promise.
3. Use the current production article shell or `blog/post-template.html`, replacing all placeholders. Use one H1, a unique title/description, the correct canonical, accessible headings and Article metadata. Never deploy the Mac's noindex review HTML directly.
4. Choose relevant owned or licensed photos, verify their provenance, provide attribution where required, optimize file sizes and inspect the actual crop. Preserve original publication dates on refreshes; set modification dates only for substantive changes.
5. Update `content/journal.json`; run `node scripts/build-journal.cjs`. It builds journal cards, related-card photos/titles, hero/share images, optional image credits, Blog schema, RSS, sitemap dates and three selected homepage previews. It does not author the article body. Inspect phone and desktop layouts, links, metadata and the booking invitation without submitting a reservation.
6. Publish through the existing Cloudflare Pages `mojo-manor` production branch, `main`. Verify the live deployment before marking complete. Record URLs, branch, commit, sources and remaining limitations in Brain's desktop or Mac handoff lane as appropriate.
7. Review search visibility and visitor behavior after sufficient data. Separate booking-button clicks from verified reservations. Review new articles at 30, 60 and 90 days; use the results and guest questions to extend the queue.

## Remaining work

- YouTube: the 45-second film is already embedded. The tracked `/youtube` booking redirect exists; private Studio changes remain pending sign-in to jcphilli21@gmail.com. Use `YOUTUBE-45S-SETUP.md`. No YouTube changes were saved by the September 7 guide release.
- Verify the Mac editorial dispatcher after the outage and resolve the existing social access prerequisite through its current owner.
- Obtain actual Search Console/GA4 data and prove completed-booking attribution before reporting search or revenue gains. Newsletter delivery has not been verified.
- Continue inherited destination-image provenance checks. The Soco autumn image has verified source and credit in the September 7 release; that is not a rights audit of every image.
- Replace the visibly labeled AI-edited property concepts with real nighttime photography when available. Keep the original property gallery available.

References: [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Parkway road status](https://www.nps.gov/blri/planyourvisit/roadclosures.htm), [Smokies conditions](https://www.nps.gov/grsm/planyourvisit/conditions.htm). Recheck changing conditions at publication and before a visit.
