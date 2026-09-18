# Contact page design QA

## Comparison target

- Source visual truth: user-selected Cobalt Concierge contact-page rendering, also saved as `C:\Users\cardw\.codex\generated_images\01a0b0a0-2348-74d2-901e-e85963adf3ec\exec-ffbb12a0-8797-4feb-aaed-da27da66a869.png`.
- Implementation route: `/contact`.
- Intended viewport: desktop, 1440px-wide page.
- Source image density: generated vertical rendering shown in the conversation.
- Implementation screenshot: unavailable.

## Evidence and state

`npm.cmd run build` passes, including TypeScript validation and static generation for `/contact`.

The local development server is running at `http://127.0.0.1:3000/contact`. The configured in-app browser was unavailable during verification (`Browser is not available: iab` and no browser surfaces were returned), so a browser-rendered implementation screenshot and console inspection could not be collected.

The core interaction implemented for review is the form submission path: required inputs are browser-validated, the submit button shows a sending state, and then reports a success state. Header and footer contact links route to `/contact`.

## Required fidelity surfaces

- Fonts and typography: implemented with the project’s offline system sans fallback, heavyweight uppercase headline, compact tracked labels, and the reference’s oversized editorial hierarchy. Not browser-inspected.
- Spacing and layout rhythm: implemented as a full-width image hero, asymmetric two-column form/contact region, and wide crew proof section with an overlaid card. Not browser-inspected.
- Colors and visual tokens: implemented with cobalt blue, lime, warm off-white, charcoal, and blue crew photography. Not browser-inspected.
- Image quality and asset fidelity: uses a new dedicated Chicago skyline hero image at `public/images/chicago-contact-hero.png` and the existing `public/images/clearway-branded-crew-cta.png` crew photograph. Not browser-inspected.
- Copy and content: checked in source. No em dashes or placeholder customer names are present.

## Findings

- [P1] Browser-rendered fidelity comparison blocked.
  Location: `/contact` desktop and mobile views.
  Evidence: no available in-app browser surface.
  Impact: final composition, mobile wrapping, console errors, and visual parity with the source cannot be assessed from a captured render.
  Fix: open the running local route in an available browser, capture desktop and mobile screenshots, compare them alongside the source rendering, then fix any P0-P2 differences.

## Implementation checklist

- [x] Add `/contact` route with a responsive page structure.
- [x] Add a functional, accessible front-end form state.
- [x] Add contact navigation and quote CTA routing.
- [x] Add dedicated skyline and crew imagery.
- [x] Pass production build.
- [ ] Capture and inspect browser-rendered desktop and mobile views.

final result: blocked
