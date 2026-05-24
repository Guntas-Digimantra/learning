# V2 pixel parity checklist

> Auto-generated from compare run · 2026-05-23T08:31:16.631Z
> Reference: http://localhost:3001 · V2: http://localhost:3000/v2 · threshold ≤ 0.01%

**Summary:** 0/3 checks passed

| Page | mobile | tablet | laptop |
| --- | --- | --- | --- |
| home | FAIL | FAIL | FAIL |

## Run

```bash
cd dm_learning && pnpm dev -p 3001
cd dm_learning_refactor && pnpm dev -p 3000
cd visual-parity && node compare.mjs --viewport all
```
