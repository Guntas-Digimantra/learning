#!/usr/bin/env node
import { PNG } from 'pngjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const slug = process.argv[2] || 'home';
const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'output', slug);
const ref = PNG.sync.read(fs.readFileSync(path.join(dir, 'reference.png')));
const v2 = PNG.sync.read(fs.readFileSync(path.join(dir, 'v2.png')));
const w = Math.min(ref.width, v2.width);
const h = Math.min(ref.height, v2.height);

let samples = [];
for (let y = 0; y < h && samples.length < 20; y++) {
  for (let x = 0; x < w && samples.length < 20; x++) {
    const i = (y * ref.width + x) << 2;
    const j = (y * v2.width + x) << 2;
    if (
      ref.data[i] !== v2.data[j] ||
      ref.data[i + 1] !== v2.data[j + 1] ||
      ref.data[i + 2] !== v2.data[j + 2]
    ) {
      samples.push({
        x,
        y,
        ref: [ref.data[i], ref.data[i + 1], ref.data[i + 2]],
        v2: [v2.data[j], v2.data[j + 1], v2.data[j + 2]],
        delta: Math.abs(ref.data[i] - v2.data[j]) + Math.abs(ref.data[i + 1] - v2.data[j + 1]) + Math.abs(ref.data[i + 2] - v2.data[j + 2]),
      });
    }
  }
}
samples.sort((a, b) => a.delta - b.delta);
console.log('Smallest diffs (likely AA):');
samples.slice(0, 8).forEach((s) => console.log(s));
console.log('\nLargest diffs:');
samples.sort((a, b) => b.delta - a.delta);
samples.slice(0, 8).forEach((s) => console.log(s));
