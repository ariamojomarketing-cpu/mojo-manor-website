# Mojo Manor 45-second film — public audit and Studio handoff

Prepared by **Codex Astra 6**, September 6, 2026.

Video: https://www.youtube.com/watch?v=8DX7RP8Gfgk

## Publicly verified

- Public video; 45 seconds; embedding allowed and public playability OK.
- Channel: Mojo Manor Waynesville, `UCAtFYEWs4o-5DfNnrQIX8BA`.
- Current title accurately identifies the home, destination, four bedrooms, ten guests, hot tub and one-mile location. It is descriptive; no urgent title change needed.
- Sixteen relevant search tags are present. Keep them. Tags are a minor discovery signal compared with the title, thumbnail and description: https://support.google.com/youtube/answer/146402?hl=en
- English automatic captions are available. Their existence does not establish transcription accuracy; review the rendered captions for Mojo Manor, Waynesville and amenity names.
- Category is People & Blogs. Travel & Events would also fit; changing category is optional.
- The current description includes the bare website address without campaign tracking. In the expanded public description, that address rendered as plain text, with no external link element.

## Ready-to-paste description — proposed, not entered in YouTube

```text
Check dates and book direct: https://mojomanorwaynesville.com/youtube

Meet Mojo Manor: a modern cabin-style home in Waynesville, North Carolina, one mile from downtown. Four bedrooms, room for up to ten guests, and the comforts of town with mountain adventures within reach.

Take a 45-second look inside:
• Private hot tub and a string-lit backyard
• Mojo's Arcade, with shuffleboard and games
• Open kitchen, coffee station and two living areas
• Fenced yard, a kids' playset and space to unwind
• Front porch rocking chairs for a slower morning

Plan outings to Maggie Valley, the Blue Ridge Parkway and Great Smoky Mountains National Park. Check current routes and allow time for mountain travel.

Explore all the house photos: https://mojomanorwaynesville.com/gallery?utm_source=youtube&utm_medium=organic_video&utm_campaign=manor_45s_southern&utm_content=description_gallery
Instagram: https://www.instagram.com/mojomanorwaynesville/

#MojoManor #WaynesvilleNC #VacationRental
```

The `/youtube` site redirect adds `book=1`, `utm_source=youtube`, `utm_medium=organic_video`, `utm_campaign=manor_45s_southern`, and `utm_content=description_book_direct`. It opens the home's booking panel. These tags attribute website visits/actions in analytics; they do not prove a completed Lodgify reservation. The URL must be clickable in YouTube for this to be a useful conversion path.

## Studio checks still required

The available browser was signed out, so private Studio settings were not inspected or changed. In the signed-in owner session, check Settings → Channel → Feature eligibility → Advanced features. YouTube requires advanced-feature access for clickable external links in long-form descriptions: https://support.google.com/youtube/answer/13748639?hl=en

Once enabled, save the description above and verify the booking link while signed out and on a phone. Check the actual audience designation, copyright/restrictions, caption accuracy, thumbnail selection and any applicable altered-content declaration against the actual video. A public `isFamilySafe` flag is not evidence of the Studio “made for kids” setting. This property tour is general travel marketing; the owner should select the audience setting according to the content, not whether children appear among amenities.

Use an actual, crisp property frame as the thumbnail. A short end screen can point viewers to the channel or another relevant video once there is one. Do not promise an external booking end-screen link unless the channel has that feature. No Facebook URL was verified, so none was invented. Keep Instagram's normal profile URL; a UTM on Instagram does not give our website analytics access to Instagram visits.

## Website work included in this release

- Click-to-play on the homepage and gallery; no YouTube player requests on those pages before the visitor clicks.
- A dedicated `/tour` page with the video as the primary content, text summary, booking link, canonical URL and VideoObject metadata.
- Privacy-enhanced `youtube-nocookie.com` embed, no automatic hero playback, visible playback/close controls, and removal of the modal player when closed.
- The `/youtube` attribution redirect and links to the confirmed Instagram and YouTube profiles.

This file records website code and a concrete Studio handoff. It does **not** claim that the video's description or private settings were changed.
