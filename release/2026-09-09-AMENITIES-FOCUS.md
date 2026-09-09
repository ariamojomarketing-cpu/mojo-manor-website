# Homepage amenities focus — September 9, 2026

Jake requested that the homepage sell the activities, design and location rather than feature bathrooms or bedrooms. This follow-up supersedes the earlier decision to retain bathroom previews.

Removed the entire homepage bathroom section and four large bedroom cards. Retained a compact four-bedroom / 2.5-bath / ten-guest summary, actual bed types, upstairs/full-bath limitations and shared-game-room futon detail, with direct gallery links. Gallery photos remain unchanged.

Added a prominent actual-photo backyard section (playset/hammock, bocce/cornhole/disc golf, putting), paired both living rooms, and added coffee/karaoke photo previews. Arcade, kitchen, hot tub and fire-pit features stay prominent. Location precedes practical sleeping details. Laurel Ridge link leads directly to club tee-time information; golf booked separately, subject to availability. Official course page checked September 9: https://www.laurelridgeexperience.com/golf-course . No included access or unverified distance/time promised.

Validation: release/amenities-20260909/final-qa.json and screenshots; widths 320/390/768/1440, images, links/anchors, menu, photo selection and keyboard close/focus, amenity/review disclosures, evening labels, film, and booking dialog/provider fallback. No booking/payment submitted. A transient fetch failure from Lodgify’s external script occurred during early local checks and was distinguished from site-origin errors; provider errors are recorded, not silently discarded. Live verification recorded separately after deployment.

Only index.html and scoped manor-polish.css affect the site. Existing generator/articles/schedules/gallery/media/booking/analytics scripts remain unchanged. Production: Cloudflare Pages mojo-manor through Git main; do not deploy the separate chat Worker.
