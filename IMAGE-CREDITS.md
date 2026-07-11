# Image credits & licensing

All photos are sourced from **Unsplash** and used under the [Unsplash License](https://unsplash.com/license):
free for commercial and non-commercial use, no permission or attribution required (credit appreciated, not mandatory).
A small "Unsplash" credit label is shown on each image as good practice.

The site currently **hot-links** these images directly from Unsplash's CDN (`images.unsplash.com`), so they load
in any browser with no setup. If you prefer to self-host (faster, offline-safe), download each file below and replace
the `src` with a local path like `assets/img/impact.jpg`.

| Page | Theme | Photographer | Photo page |
|---|---|---|---|
| Home (hero) | Minimalist architecture | Kimon Maritz | https://unsplash.com/photos/mQiZnKwGXW0 |
| Leadership Journey | Executive at office window, sunny | Martin Látal | https://unsplash.com/photos/yHh7tXnJkYI |
| Impact | Clean modern high-tech facility | Arseny Togulev | https://unsplash.com/photos/WCqqJioFLZc |
| Insights | Circuit board macro | Luke Jones | https://unsplash.com/photos/tBvF46kmwBw |
| Projects | Structural metal lattice | Alina Grubnyak | https://unsplash.com/photos/ZiQkhI7417A |
| Connect | Global business team | Christina @ wocintechchat | https://unsplash.com/photos/faEfWCdOKIg |

Note: the Leadership Journey, Impact, and Connect images use the lighter "soft" filter variant (closer to full colour); the others keep the stronger moss/forest duotone.

## Styling note
Every photo is rendered with a **moss/forest duotone overlay** (grayscale + brand-color multiply) so the imagery
stays calm, premium, and on-palette — and so no bright tech-blue clashes with the brand. The treatment lives in
`assets/styles.css` under `.media-band` and `.hero-figure .figure-photo`. To show photos in full color, reduce the
`grayscale()` filter and lower the `.tint` opacity.

## Personal portrait
The small card in the homepage hero is still reserved as your **personal portrait placeholder**. When ready, drop your
own low-key business-casual photo there (replace the `.photo-ph` block in `index.html`).

## To self-host the images later
On a machine with internet access:
```
# example
curl -L "https://images.unsplash.com/photo-1670483109381-8bccb7d29383?w=1600&q=70&fm=jpg&fit=crop" -o assets/img/impact.jpg
```
Then point the `<img src="...">` for that page at `assets/img/impact.jpg`.
