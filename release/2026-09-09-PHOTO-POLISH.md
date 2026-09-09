# Manor photography refinement

Author: Codex Astra 6 · September 9, 2026

Final integration preserves Mac's newer amenities-focused production commit `31c2368234ef395e65cfc989dd2220e0eba412c8`.

## Implemented

- Eight versioned photo revisions: main and alternate Gatsby views, Royal Suite bed, and all five bathroom photographs. Built-in image editing used for bedding presentation, exposure and white balance; original files remain available.
- Revised room photographs appear in the full gallery and shared photo viewer. Mac's latest homepage intentionally leads with amenities, living spaces and the backyard; bedroom/bathroom photo cards are not restored.
- Full gallery JSON, rendered gallery and thumbnails share the same revised selections. All 46 entries, including five bathroom angles and all four bedrooms, remain.
- Removed both large `DIGITALLY EDITED PHOTO` badges. Ordinary room retouching has no guest-facing edit labels. Existing evening visualizations retain short scene-specific captions and descriptive alt text.
- Added a noindex before/after comparison source at `review/photo-polish-20260909/index.html`, served locally on port 4191. Production intentionally redirects `/review/*` to the original archive; that rule is preserved. The original `/old/` and all source photographs remain intact.
- Gallery sitemap date updated. Mac's layout, journal and booking behavior preserved.

## Validation

116 image decode checks; exact gallery dimensions; homepage, gallery and review image references; photo viewer IDs; stable gallery rebuild; JavaScript syntax. Local browser inspection confirmed revised Gatsby opens correctly, the Bathrooms filter shows all five improved angles, and the desktop viewer has no horizontal page overflow. Integration rechecked after preserving the latest Mac homepage. This is a bounded photography check, not a repeated full booking or mobile audit.

## Proposed, not implemented

- Fresh on-site photographs of the open hot tub with its actual blue lighting and running jets; lit fire pit; uncovered game tables; greens in season; storage entrance under softer daylight.
- Keep smaller equipment/detail shots in the gallery rather than promoting them to homepage lead images.
- Realty's before-renovation photograph remains documentary evidence; retain its factual before/after context. Realty preview photographs were audited but not changed by this Manor commit.

Full photo-by-photo findings and prompts are coordinated through the shared Brain handoff.
