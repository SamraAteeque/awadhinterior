/**
 * Comprehensive image optimiser — uses sharp (already installed).
 * Backs up originals to public/originals/, then overwrites with compressed versions.
 * Run: node scripts/optimize-all-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '../public');
const ORIGINALS = path.join(PUBLIC, 'originals');

fs.mkdirSync(ORIGINALS, { recursive: true });

// Target dimensions per image group
const RULES = [
  // Full-screen hero / detail images — wide
  { pattern: /^(hero|hero-mobile|og-image)\.jpg$/i,           width: 1600, quality: 82 },
  { pattern: /^ID[1-6]\.jpg$/i,                               width: 1400, quality: 82 },
  // Portfolio grid
  { pattern: /^properties[/\\]/i,                             width: 1200, quality: 80 },
  // Service section images
  { pattern: /^services2[/\\]/i,                              width: 1100, quality: 80 },
  // Feature cards
  { pattern: /^features[/\\]/i,                               width: 1000, quality: 80 },
  // Team / testimonial small photos
  { pattern: /^(team|testimonial)[/\\]/i,                     width: 600,  quality: 85 },
  // Catch-all for anything else > 500 KB
  { pattern: /\.(jpg|jpeg|png)$/i,                            width: 1600, quality: 80 },
];

function ruleFor(rel) {
  return RULES.find(r => r.pattern.test(rel)) ?? RULES[RULES.length - 1];
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'originals') walk(full, files);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function run() {
  const files = walk(PUBLIC);
  let saved = 0;
  let count = 0;

  for (const file of files) {
    const rel = path.relative(PUBLIC, file);
    const beforeBytes = fs.statSync(file).size;

    // Skip tiny files (under 100 KB — already fine)
    if (beforeBytes < 100 * 1024) continue;

    const rule = ruleFor(rel);

    // Backup original once
    const backupPath = path.join(ORIGINALS, rel);
    if (!fs.existsSync(backupPath)) {
      fs.mkdirSync(path.dirname(backupPath), { recursive: true });
      fs.copyFileSync(file, backupPath);
    }

    const src = fs.existsSync(backupPath) ? backupPath : file;

    try {
      const ext = path.extname(file).toLowerCase();
      const pipeline = sharp(src).resize({ width: rule.width, withoutEnlargement: true });

      if (ext === '.png') {
        await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(file + '.tmp');
      } else {
        await pipeline.jpeg({ quality: rule.quality, mozjpeg: true }).toFile(file + '.tmp');
      }

      const afterBytes = fs.statSync(file + '.tmp').size;
      fs.renameSync(file + '.tmp', file);

      const kb = (b) => (b / 1024).toFixed(0) + ' KB';
      const pct = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(0);
      console.log(`✓  ${rel.padEnd(45)} ${kb(beforeBytes).padStart(8)} → ${kb(afterBytes).padStart(8)}  (−${pct}%)`);

      saved += beforeBytes - afterBytes;
      count++;
    } catch (err) {
      // Clean up tmp on error
      if (fs.existsSync(file + '.tmp')) fs.unlinkSync(file + '.tmp');
      console.error(`✗  ${rel}: ${err.message}`);
    }
  }

  const savedMB = (saved / 1024 / 1024).toFixed(1);
  console.log(`\nDone. ${count} images compressed, ${savedMB} MB saved.`);
}

run();
