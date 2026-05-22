# V2 vs dm_learning — Pixel Parity Report

Generated: 2026-05-22T10:57:52.781Z

| Setting | Value |
| --- | --- |
| Reference | http://localhost:3001 |
| V2 | http://localhost:3000/v2 |
| Viewport | 1440×900 |
| Match threshold | 0 (exact pixels) |

## Summary: 0/1 passed

| Page | Status | Ref HTTP | V2 HTTP | Diff pixels | Diff % | Dimensions | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| home | FAIL | 200 | 200 | 4044960 | 31.5441% | 1440×8778 vs 1440×8905 | Dimension mismatch ref 1440x8778 vs v2 1440x8905 |

## Artifacts

Each failed page has `reference.png`, `v2.png`, and `diff.png` (red = mismatch).