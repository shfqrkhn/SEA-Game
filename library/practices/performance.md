# Performance on ordinary laptops

## Reference machine

Example (SEA Game): assume the lowest common denominator of business laptops up to three years old: Core i3/i5 U-series or Ryzen 5 U, Intel UHD/Iris Xe or Radeon Vega 7, 8 GB single-channel memory, 1366×768 or 1080p at 125–150%, a touchpad, Edge, battery saver on.

## Proxy when you have no such laptop

Chromium and Edge forced onto an Intel integrated GPU (`--use-angle=d3d11 --enable-gpu --ignore-gpu-blocklist --force_low_power_gpu`) with 4× CPU throttling. Fail the run unless the WebGL renderer string names the expected integrated GPU, so a run never silently measures the discrete GPU. Residual risk: a proxy is not the real machine (thermal limits, drivers, memory bandwidth and battery saver differ); confirm on one real low-end laptop when you can, and say in the evidence that a proxy was used.

## Budgets (example project; keep yours in one table with reasons)

| Metric | Budget |
|---|---|
| Single HTML file | ≤ 50 MB hard, ≤ 40 MB target; embedded imagery ≤ 40 MB |
| Time to interactive | ≤ 2 s first screen; ≤ 3 s with maximum saved state |
| Click to result | ≤ 100 ms p95; INP ≤ 200 ms; no long task over 200 ms after load |
| 3D | ready ≤ 3 s; ≤ 30 fps cap; p95 frame ≤ 33 ms, GPU ≤ 16 ms; ≤ half the machine |
| Memory | ≤ 400 MB after a full session, no growth across cycles |
| Idle | ≤ 3% CPU over 60 s |

## Techniques

- Pace drawing: render only when something changes or while turning, capped at 30 fps; stop when hidden.
- Parse only the model shown; decode images lazily and never evict one on screen.
- Small procedural environment map (e.g. 64 px PMREM) instead of HDR files; one shadow map; extra lights unshadowed.
- Bake ambient occlusion into vertex colours; avoid image textures where size is tight.
- Fall back to layered stills when WebGL 2 is missing or the context is lost; recover from context loss, trusting `isContextLost()` over the events (a browser may announce a restore early, or restore silently).
- Never write the document root's attributes (`lang`, `data-theme`, title) unless the value changed: even an unchanged write restyles the whole page.
- Split a slow interaction timing into phases (handled, draw start, draw, paint) before fixing; profile one instance on an unminified build.
- Keep work inside a click to what the click needs; where a quantity has a closed form (camera fit distance, a bound, a layout size) solve it rather than search; treat a budget met with thin margin as a defect to profile.
- Own every GPU resource: dispose of geometries, materials, textures and render targets when a view closes (three.js does not free them for you); give shared resources a clear owner or a reference count; cancel loads no longer wanted; test repeated open and close for memory growth.
- Count GPU memory, not file size: a 200 KB AVIF of 2048 px still takes about 16 MB decoded (more with mipmaps).
- A visibility observer may go stale across a detach and re-attach on a loaded browser: when a view puts its canvas back on the page, ask afresh (drop pending records, unobserve, observe). Test with an observer that reports only once.
- "Ready" is not "drawn": a screenshot test of a canvas waits for the renderer's own draw event, not a ready flag.
- Measure nothing first: a blank page with the same instrument is the harness's floor. Emulated CPU slowdown burns CPU itself, so measure idle CPU unthrottled; the slowdown is browser-wide, last setter wins, and closing the session that set it clears it.
- Without a graphics card (CI runners, some virtual machines) Chromium composites in software and reads every new WebGL frame back before showing it, waiting for the whole draw: a frame the player waits for costs its full software draw time on the main thread. In such a draw do only what the player sees now (here, skip the shadow-map pass) and let the rest follow in the next paced frame.
- Keep what the reader opened open: a view that rebuilds its DOM recreates every `<details>` closed; carry the open ones across by an id every panel has (never its place, which moves between phases; never its title, which counts and translation change), and enforce the id with a source check.
- Measure on a quiet machine. Timing failures under load are evidence to investigate, never a reason to raise budgets.
