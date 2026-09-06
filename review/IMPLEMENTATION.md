# Mojo Manor homepage redesign — implementation review

**Author: Codex Astra 6 · Windows · September 5, 2026**

This is a working, complete homepage revision on `codex/mojo-manor-homepage-review`. It is not a production release. Base: `115c6579647b8f9d3f7dadff3d5d5027d93bebe9` in `ariamojomarketing-cpu/mojo-manor-website`.

## Open the review

- [Interactive before/after dashboard](./index.html): six matching sections, desktop/phone controls, explanations and three original/concept image sliders.
- [Full redesigned homepage](../index.html).
- [Desktop screenshot](after-desktop.png), [full page](after-full.png), [phone](after-mobile.png), [full phone page](after-mobile-full.png).
- [Comparison screenshot](comparison-desktop.png), [arcade](after-experience.png), [after dark](after-after-dark.png), [rooms](after-rooms.png), [location](after-location.png).

On the Windows review computer the server is `http://127.0.0.1:4173/review/`. This address only works on that computer while its preview server is running. On another computer, check out this branch and serve the repository root through any local HTTP static server, then open `/review/`. Do not open the HTML through `file://`: root paths, frames and booking messages need an HTTP origin. Python example from the repository root: `python3 -m http.server 4173 --bind 127.0.0.1`.

## Implemented in this branch

| Change | Reason and intended benefit |
|---|---|
| Full homepage, warm ivory/deep green/bronze, editorial type and varied section composition | Give the actual home visual priority and a coherent boutique-hospitality identity. |
| Real furnished front living room leads; photo first on phones | Establish the quality and character of the stay before visitors explore details. The cabin scene at the left is on the television, not a window view. |
| Original Mojo mark becomes a small signature crest with a subtle hover response | Keep the brand personality while freeing the opening image and headline. No replacement logo was invented. |
| “Mountain days. Manor nights.” with explicit one-mile, residential-neighborhood positioning | Make in-town convenience a reason to book and set accurate arrival expectations. |
| Arcade/kitchen story, interactive hot-tub/fire-pit scene, bedrooms, dog welcome, location, guest excerpts and FAQs | Balance distinctive experiences with the practical information groups need. |
| 19-real-photo filtered tour with thumbnails, arrows and keyboard controls | Give each image a clear role and make room/amenity inspection easier. |
| One Lodgify booking window, repeated contextual actions and a persistent phone booking bar | Make checking dates accessible throughout the visit. No unverified nightly price or savings percentage is advertised. |
| Three labeled AI photo edits | Show the intended reshoot direction using the actual property's setting. See [generation record](IMAGE-PROMPTS.md). They are not evidence of currently photographed conditions. |
| Responsive WebP variants at 640/1200/1600 filename sizes, eager hero/lazy secondary images, dedicated 1200×630 JPEG social image | Reduce image delivery overhead and improve intentional cropping/sharing. Source images are not enlarged; a filename can exceed the actual intrinsic width. |
| Gallery repair | Remove 14 `<source>` placements referring to 13 missing WebPs, retaining real existing JPEG fallbacks. Reorder the opening six gallery pictures. Correct 3.5 baths to 2.5. [Exact record](image-repairs.json). |
| Selected SEO repairs | Rewrite homepage title/description, keep one H1 and matching FAQ content/schema, remove the inherited “Mountain Setting” schema amenity, use representative share media, change guide schema from TouristAttraction to CollectionPage, normalize privacy canonical and omit the noindexed privacy page from sitemap. |
| Accessibility and simpler homepage code | Native dialogs, named controls, focus styles, reduced-motion support, mobile navigation and no homepage dependency on Three.js/GSAP. |

Photo provenance: [manifest](photo-manifest.json), [gallery selections](gallery-data.json). Local archive selections refer to `29 Timothy/Dec Rental Photos`; original archive paths/IDs are documented in the shared Brain photo inventory. All images consumed by this version are included in this branch. Bedroom choices were retained or matched to their furnished archive originals.

## Booking integration and known limitation

The original website ID `637973`, rental `768708`, checkout destination and guest/date settings remain. Lodgify renders its calendar through an external DOM portal, which conflicts with the top layer of a native dialog if loaded directly. The vendor now runs in a same-origin `booking-widget.html` iframe inside the dialog. Its calendar stays usable, and Search opens the provider in a new tab. The parent validates message origin and source, limits frame height, handles delayed loading, and keeps a direct checkout link available.

**Observed limitation:** Lodgify rejects API requests from `http://127.0.0.1:4173` with CORS errors. Calendar controls render and month navigation is clickable on desktop and phone; live availability and stay pricing are **not verified**. An availability-fetch failure produces a message directing visitors to the provider. Do not interpret selectable preview dates as confirmed availability. Recheck on the intended deployed origin before release; do not work around provider restrictions by proxying private requests.

## Preserved context

- `_redirects`, Google Vacation Rentals listing routing, article URLs, rate/policy URLs, Cloudflare functions and worker code remain.
- GA4 `G-ZZJS8E767M`, Google Ads `AW-18375451046` and the existing PPC landing beacon are retained in `manor-analytics.js`; it and the existing chat script activate only on the real production hostname. Other legacy pages retain their existing tracking code.
- This is the existing Cloudflare Pages project. No migration to Sites or Vercel was performed.
- The “before” frame is the homepage captured from the base commit, with a root base path, noindex and its homepage GA loader removed for review. Its internal anchors point back to the captured page so its menu stays within the before pane. It uses original styles/scripts and contains original content faults; it is not a claim about a concurrently edited live deployment.

## Validation performed

Chrome desktop automation and visual screenshot inspection:

- No horizontal overflow at widths **320, 390, 768, 1024 and 1440**.
- All actual homepage and full-gallery image sources decoded successfully; empty lightbox placeholders were excluded.
- Photo categories, count, next/previous keyboard navigation and dialog dismissal passed.
- Mobile menu, booking-window opening, evening scene toggle and reduced-motion behavior passed.
- Comparison section selection, phone viewport toggle and keyboard-operable image comparison sliders passed.
- Lodgify date-picker opening and next-month navigation passed at desktop and phone sizes, without a reservation or payment.
- `git diff --check` passed. Structured-data JSON and local homepage asset references were checked.

Machine records: [page/UI validation](validation.json), [booking validation with CORS evidence](booking-validation.json). Expected blocked analytics requests and third-party fetch failures are recorded; this is not a claim of zero console errors across legacy/vendor code. Screenshot dates show the browser's current calendar, not an availability promise.

Not measured: field Core Web Vitals, Search Console coverage, current rankings, completed-payment flow, final booking confirmation or conversion improvement. No conversion uplift or “top 1%” score is claimed.

## Before production release — still proposed work

1. Review the complete design and image sequence with Jake.
2. Replace the three AI shoot placeholders with approved, accurate property photography; verify the actual spa interior and table materials against the concepts.
3. Verify live Lodgify availability, guest counts, selected-date transfer, final totals and terms on the deployed origin. Use an approved test procedure for any transaction.
4. Confirm bed/sleeping arrangements for the advertised ten guests, current amenities and current policies against the listing.
5. Validate production chat, GA/Ads attribution and GVR routing. Preserve existing conversion event definitions and coordinate with Mac's advertising work.
6. Remove the homepage review-only noindex, preview ribbon and comparison links for the approved production package; exclude `/review/` and its evidence assets from public production output. Keep the widget helper noindex. Do not merge this branch unchanged onto production.
7. Check the real social share image after deployment; its production URL will not resolve until those assets are released. Recheck mobile and browser performance on the final host.

Other sites' proposed changes remain in the shared site-review handoff. This branch implements Mojo Manor only.


## Owner-requested arcade ceiling revision

Codex Astra 6 updated the homepage and original/concept slider to `arcade-concept-v2` after Jake requested removal of the garage-door opener hardware from the ceiling. Both opener units and their rails, springs, brackets and cords were digitally removed. The labeled AI concept retains the white ceiling structure, round light and blue perimeter lighting. Original property-gallery photographs are unchanged. Confirm the real ceiling condition when preparing the production photography. The prior concept remains in versioned assets/history.

## Owner-requested fire-pit background revision

Codex Astra 6 updated the By the fire scene and its original/concept slider to `firepit-concept-v2` after Jake requested removal of the utility pole and power lines behind the fence. The edited concept removes poles, overhead wires and the pole-mounted lamp/glare while retaining the yard and fence lighting. This is a digital preview edit, not evidence that the real utilities have been removed. Original property-gallery photos remain unchanged. See `review/after-firepit.png` for the updated page view and `IMAGE-PROMPTS.md` for the full prompt.
