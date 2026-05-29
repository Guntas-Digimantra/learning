#!/usr/bin/env node
import { PNG } from 'pngjs';
import fs from 'fs';

const diffPath = process.argv[2] || 'output/course-full-stack-development-mern/mobile/diff.png';
const diff = PNG.sync.read(fs.readFileSync(diffPath));
const { width, height } = diff;
const band = 80;
const bands = [];

for (let y0 = 0; y0 < height; y0 += band) {
  const y1 = Math.min(y0 + band, height);
  let n = 0;
  for (let y = y0; y < y1; y++) {
    for (let x = 0; x < width; x++) {
      const i = (width * y + x) * 4;
      if (diff.data[i] > 0 || diff.data[i + 1] > 0) n++;
    }
  }
  const total = width * (y1 - y0);
  bands.push({ y0, y1, pct: ((n / total) * 100).toFixed(2) });
}

bands.sort((a, b) => Number(b.pct) - Number(a.pct));
console.log(`diff ${diffPath} ${width}x${height}\nTop bands (${band}px):`);
for (const b of bands.slice(0, 12)) {
  console.log(`  y ${b.y0}-${b.y1}: ${b.pct}%`);
}
