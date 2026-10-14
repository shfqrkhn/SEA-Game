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
- Own every GPU resource: dispose of geometries, materials, textures and render targets when a view closes (three.js does not free them for you); give shared resources a clear owner or a reference count; cancel loads no longer wanted; test repeated open and close for memory growth.
- Count GPU memory, not file size: a 200 KB AVIF of 2048 px still takes about 16 MB decoded (more with mipmaps).
- Measure on a quiet machine. Timing failures under load are evidence to investigate, never a reason to raise budgets.
