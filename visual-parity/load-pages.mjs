/**
 * Dynamic page slugs for visual-parity compare.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

export const BLOG_SAMPLE_SLUG =
  process.env.BLOG_SAMPLE_SLUG ?? 'how-to-build-a-career-in-ai';

function extractObjectKeys(filePath, exportName) {
  const src = fs.readFileSync(filePath, 'utf8');
  const marker = `export const ${exportName}`;
  const start = src.indexOf(marker);
  if (start < 0) return [];
  const brace = src.indexOf('{', start);
  if (brace < 0) return [];
  const keys = [];
  const re = /['"]([a-z0-9-]+)['"]\s*:/g;
  let depth = 0;
  for (let i = brace; i < src.length; i++) {
    const ch = src[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) break;
    }
    if (depth === 1) {
      re.lastIndex = i;
      const m = re.exec(src);
      if (m && m.index <= i + 1) keys.push(m[1]);
    }
  }
  return [...new Set(keys)];
}

function extractDefaultObjectKeys(filePath, constName) {
  const src = fs.readFileSync(filePath, 'utf8');
  const marker = `const ${constName} = {`;
  const start = src.indexOf(marker);
  if (start < 0) return [];
  const keys = [];
  const re = /^\s{2}['"]([a-z0-9-]+)['"]\s*:\s*\{/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (m.index > start) keys.push(m[1]);
  }
  return [...new Set(keys)];
}

export function loadCourseSlugs() {
  const ai = extractDefaultObjectKeys(
    path.join(ROOT, 'dm_learning/src/app/data/courses/courses-details.tsx'),
    'dmlCourses'
  );
  const dev = extractDefaultObjectKeys(
    path.join(ROOT, 'dm_learning/src/app/data/courses/development-courses-details.tsx'),
    'developmentCourses'
  );
  return [...new Set([...ai, ...dev])];
}

export function loadMicrosoftSlugs() {
  const file = path.join(
    ROOT,
    'dm_learning/src/app/data/microsoft-certifications/certification-slugs.ts'
  );
  if (!fs.existsSync(file)) {
    return [
      'ai-engineer',
      'data-analyst',
      'solutions-architect',
      'devops-engineer',
      'data-engineer',
      'information-protection-administrator',
      'security-operations-analyst',
      'data-scientist',
      'security-engineer',
      'developer-(beginner)',
      'developer-(intermediate)',
      'functional-consultant',
    ];
  }
  const src = fs.readFileSync(file, 'utf8');
  const m = src.match(/export const certificationSlugs[^=]*=\s*\[([\s\S]*?)\]/);
  if (!m) return [];
  return [...m[1].matchAll(/['"]([^'"]+)['"]/g)].map((x) => x[1]);
}

export function loadWebinarSlugs() {
  const file = path.join(ROOT, 'dm_learning/src/app/data/webinarConfig.ts');
  const src = fs.readFileSync(file, 'utf8');
  return [...src.matchAll(/^\s{2}["']([^"']+)["']\s*:/gm)].map((m) => m[1]);
}
