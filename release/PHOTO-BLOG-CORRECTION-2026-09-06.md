# Bathroom photos and blog visibility correction

**Codex Astra 6 — September 6, 2026.** Jake flagged that the redesigned homepage appeared to omit bathroom photography and the blog.

## Finding and implementation

The blog was still live at `/blog/` with 12 articles and unchanged URLs. Its “Travel journal”/“WNC Insider” navigation labels and the absence of homepage article previews made it harder to recognize. Navigation now says **Blog**, the blog index identifies itself explicitly, and three existing articles are featured on the homepage. No article was removed, newly published or given a false fresh publication date.

The full `/gallery` page already contained 44 images, including four bathroom images. The homepage's separate viewer contained 19 images, with only the ensuite bathroom and that image incorrectly categorized as Bedrooms. The homepage now presents all three bathroom spaces in visible cards, with a separate Bathrooms filter containing four photographs. Its quick viewer has 22 photos; the prominent full-gallery link explicitly offers all 44. The full gallery has category jump links including `/gallery#bathrooms`.

Existing original property photos were inspected before use. New responsive WebPs are derived from `Hall Bath - Vanity Full.jpg`, `Half Bath - Powder Room.jpg`, and `Bathroom - Master.jpg`. The existing `bath` image supplies the wider ensuite view. These are conventional resized/compressed photographs, with no generated content or semantic retouching. Several other bathroom-named source files contained a bedroom or the wrong bathroom and were not selected by filename alone.

## Maintaining the blog previews

`content/journal.json` remains the article inventory. Mark up to three entries with `homepageFeatured: true`; optional `homepageSummary` supplies a concise homepage introduction. `node scripts/build-journal.cjs` now also renders those previews into the homepage's `HOMEPAGE_BLOG_START/END` markers while maintaining journal cards, RSS, article image mappings and Blog schema.

The existing content plan remains two substantive article releases/refreshes monthly, beginning with existing seasonal guides and current-source checks. No duplicate posting automation was added. Posting frequency alone is not a ranking promise; useful, accurate content and accessible internal links remain the objective. [Google's helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

The `/old/` archive, booking integration, analytics IDs, Workers and production hosting remain unchanged by this correction. The dated Brain handoff records the final commit, deployment verification and screenshots.
