#!/usr/bin/env node
import { PNG } from 'pngjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'home';
const dir = path.join(__dirname, 'output', slug);

const ref = PNG.sync.read(fs.readFileSync(path.join(dir, 'reference.png')));
const v2 = PNG.sync.read(fs.readFileSync(path.join(dir, 'v2.png')));
const w = Math.min(ref.width, v2.width);
const h = Math.min(ref.height, v2.height);
const band = 100;
const bands = [];

for (let y0 = 0; y0 < h; y0 += band) {
  let diff = 0;
  const y1 = Math.min(y0 + band, h);
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * ref.width + x) << 2;
      if (
        ref.data[i] !== v2.data[i] ||
        ref.data[i + 1] !== v2.data[i + 1] ||
        ref.data[i + 2] !== v2.data[i + 2] ||
        ref.data[i + 3] !== v2.data[i + 3]
      ) {
        diff++;
      }
    }
  }
  bands.push({ y0, y1, diff, pct: ((diff / (w * (y1 - y0))) * 100).toFixed(1) });
}

bands.sort((a, b) => b.diff - a.diff);
console.log(`Top diff bands for ${slug} (${w}x${h}):`);
for (const b of bands.slice(0, 8)) {
  console.log(`  y=${b.y0}-${b.y1}: ${b.diff} px (${b.pct}%)`);
}
