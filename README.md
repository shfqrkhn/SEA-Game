# SEA Game - Systems Engineering Awareness

## Use offline (the primary distribution mode)

Download **SEA_Instructor_Standalone.html** or **SEA_Student_Standalone.html** and open the downloaded file directly in a browser. Each is a self-contained HTML application: game rules, translations, UI/CSS, logic, and embedded fallback vector art are available without a network, server, install, PWA service worker, or account.

The instructor screen and ledger remain authoritative. The student companion does not synchronize with it. Session recovery uses browser session storage and may not survive browser closure.

## Optional online artwork

Each HTML attempts to display per-card WebP illustrations at `https://shfqrkhn.github.io/SEA-Game/assets/v1/cards/<CARD-ID>.webp`, using fixed validated card IDs. If offline or image loading fails, local SVG remains visible; gameplay does not wait for images. No external JS, CSS, runtime manifest, fonts, scripts, or API are required.

Approved production artwork is **not yet uploaded**; currently the image fallback is expected. The reconstructed synthetic card deck and balance still require approval.

See `assets/v1/cards/README.md` for naming and creation rules.

## Quality boundary

These two files are implementation candidates derived from the v3.0.0 application; no full browser, device, accessibility, or classroom acceptance suite has been demonstrated. Verify `file://` use with network disabled and all phases before classroom release. Do not enter personal, Protected, Classified, real-project, or operational information.
