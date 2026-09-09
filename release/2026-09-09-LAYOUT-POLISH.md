# Homepage and journal refinement — September 9, 2026

Jake approved the September 9 recommendations and authorized Mac to implement them. Built from origin/main f13b4c8 in codex/manor-editorial-polish-20260909.

## Changes

- Verified Airbnb 5.0/6-review link and an existing exact Sierra excerpt now appear immediately below the opening property facts. Full existing testimonials remain, with two additional stories in a native disclosure.
- Shorter introduction, consolidated coffee/karaoke/games links, expandable amenity details, compact phone bathroom rows and article teasers. All four bedroom cards, three visible bathroom photos, upstairs limits, original policies, complete 46-photo viewer and core booking integrations retained.
- Real family-room composition and actual putting-green photo replace weaker homepage previews; clicking each selects that same original in the viewer. No new generated imagery; existing edited-photo disclosures remain.
- Journal heading now Waynesville Travel Journal, retaining WNC Insider branding. Twelve concise cardTitle labels are separate from full article/schema titles. Index cards sort by original publication date, so a new article no longer depends on insertion position. A fourth homepageFeatured flag now fails before generated files change. Existing three homepage selections stay in place until the next scheduled article release.
- Canonical URLs and article bodies/dates retained. Existing builder already maintains article sitemap entries/dates; homepage/index lastmod accurately updated for this presentation change.

## Validation

Default 390px homepage: 17,039 → 13,308px, about 22% shorter. At 1440px: 12,117 → 10,254px. Compact guest proof begins at 1,184px on phone (previous full-review section began at 13,185px). These describe layout, not measured conversion gains.

Responsive/browser checks passed at 320/390/768/1440: images, overflow, three bathroom/four bedroom cards, all local links, mobile menu, eight photo triggers selecting correct originals, Escape/focus restoration, amenity/testimonial disclosures, evening switch/disclosures, film entry/cleanup and booking-window/fallback entry. Five journal filters passed. No reservation, payment, signup or chat message submitted; no claim of verified checkout completion.

Isolated generator test passed newest-first ordering, short title escaping, preserved full schema title, homepage/RSS/sitemap integration, stable rebuilding and failure before writing for four featured entries. Other article bodies, policy/gallery pages, booking/gallery/video/analytics scripts and hosting routes have no source diff.

Evidence: polish-20260909/final-qa.json, editorial-review.json and desktop/mobile screenshots. These release artifacts are excluded from Pages by the existing .cfignore.

## Release and rollback

Push the tested commit without force through the existing Cloudflare Pages mojo-manor Git production path, then verify the actual homepage/journal/new stylesheet and controls. Git push alone is not a live receipt. Record final production verification in Brain. To roll back, fetch current main and revert this release commit after reviewing any later edits; do not reset shared history or restore a stale whole-site checkout.
