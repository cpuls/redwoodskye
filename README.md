# Redwood Skye

A build-free static website prepared for GitHub Pages. Open `index.html` through a local HTTP server. No Node or build step is required.

## Preview

`python3 -m http.server 8768 --directory redwood-skye`

## Publishing after review

Create a dedicated GitHub repository and upload the contents of this directory (not its parent). Enable Pages from the main branch, root folder. Set `redwoodskye.com` as the custom domain. The included CNAME is ready for this step. Do not change the existing GoDaddy DNS or cancel the website plan until the replacement is verified and any account/email dependencies are checked.

## Reservations and questions

All booking buttons link to the existing Airbnb listing. Questions link to Airbnb's message-host page. There is no duplicate calendar, invented pricing, or new contact-form inbox to maintain.

## Video

The film currently uses the existing Vimeo embed from the GoDaddy website, loaded only when a visitor clicks Play. The full episode can be moved to the owner's YouTube channel later by replacing the iframe URL in `site.js`. A photo hero keeps the first load fast. If desired, add a short, muted, compressed hero clip separately rather than auto-playing the entire episode.

## Content and assets

Source review: November 1, 2026, redwoodskye.com and airbnb.com/h/redwoodskye. Property images are stored locally, optimized to WebP, so the replacement does not depend on GoDaddy's image servers. Numeric review counts, rates, and available dates remain on Airbnb rather than going stale here. Google Analytics uses the supplied property G-NBRMH2J0NG, with the same Advanced Consent Mode controls as the other Puls websites. Tracking loads only on redwoodskye.com and www.redwoodskye.com; local previews are excluded. Booking clicks and Staycation play-button clicks are also measured.

Edit copy in `index.html`, styling in `styles.css`, and gallery/video behavior in `site.js`. Gallery thumbnails use `-sm.webp`; full photos load only when opened. The upstairs room is explicitly described as an open loft, and paid EV charging is disclosed.

## Brand and editorial updates

The wordmark uses actual Macondo outlines, narrowed horizontally by 9%, used alone without a logo icon. Macondo font and its open license are included in assets. Staycation is highlighted in the hero and immediately below it. Short attributed review excerpts come from the existing website and Airbnb listing. Original maker, neighborhood-history, and charger links have been restored alongside verified attraction links.
