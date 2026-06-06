/**
 * Video compressor — uses ffmpeg-static (pre-compiled binary, no system install needed).
 * Compresses MP4s with H.264 CRF 28 and creates a WebM copy + a JPEG poster frame.
 * Run: node scripts/compress-videos.mjs
 */

import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

ffmpeg.setFfmpegPath(ffmpegPath);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '../public');
const ORIGINALS = path.join(PUBLIC, 'originals');

fs.mkdirSync(ORIGINALS, { recursive: true });

const VIDEOS = ['IDV1.mp4', 'IDV2.mp4', 'IDV3.mp4'];

function sizeMB(filePath) {
  if (!fs.existsSync(filePath)) return '—';
  return (fs.statSync(filePath).size / 1024 / 1024).toFixed(1) + ' MB';
}

function compressVideo(input, output) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .videoCodec('libx264')
      .outputOptions([
        '-crf 28',           // quality: 18 (best) → 28 (good) → 51 (worst). 28 is ~60% smaller with no visible loss.
        '-preset slow',      // slower encode = smaller file
        '-movflags +faststart', // moov atom at front — video starts playing before fully downloaded
        '-vf scale=-2:720',  // cap at 720p, maintain aspect ratio. Most screens don't need 1080p for backgrounds.
        '-an',               // no audio track (background videos are muted anyway)
      ])
      .on('start', cmd => console.log('  ffmpeg →', cmd.split(' ').slice(-6).join(' '), '...'))
      .on('error', reject)
      .on('end', resolve)
      .save(output);
  });
}

function makeWebM(input, output) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .videoCodec('libvpx-vp9')
      .outputOptions([
        '-crf 33',
        '-b:v 0',
        '-vf scale=-2:720',
        '-an',
        '-row-mt 1',
      ])
      .on('error', reject)
      .on('end', resolve)
      .save(output);
  });
}

function makePoster(input, output) {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .screenshots({
        count: 1,
        timemarks: ['00:00:01.000'],
        filename: path.basename(output),
        folder: path.dirname(output),
        size: '1280x720',
      })
      .on('error', reject)
      .on('end', resolve);
  });
}

async function run() {
  for (const filename of VIDEOS) {
    const inputPath = path.join(PUBLIC, filename);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${filename} — not found.`);
      continue;
    }

    const base = path.basename(filename, '.mp4');
    const backupPath = path.join(ORIGINALS, filename);
    const outputPath = path.join(PUBLIC, filename);
    const webmPath  = path.join(PUBLIC, `${base}.webm`);
    const posterPath = path.join(PUBLIC, `${base}-poster.jpg`);

    // Backup original
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`\n  Backed up → originals/${filename}`);
    }

    console.log(`\n── ${filename}  (${sizeMB(backupPath)} original)`);

    // 1. Compressed MP4
    try {
      await compressVideo(backupPath, outputPath);
      console.log(`  ✓ MP4 compressed:  ${sizeMB(backupPath)} → ${sizeMB(outputPath)}`);
    } catch (e) {
      console.error(`  ✗ MP4 failed: ${e.message}`);
    }

    // 2. WebM variant (VP9) — served to Chrome/Firefox for ~20% smaller files
    if (!fs.existsSync(webmPath)) {
      try {
        await makeWebM(backupPath, webmPath);
        console.log(`  ✓ WebM created:    ${sizeMB(webmPath)}`);
      } catch (e) {
        console.error(`  ✗ WebM failed: ${e.message}`);
      }
    } else {
      console.log(`  ─ WebM exists, skipped.`);
    }

    // 3. Poster frame (only for IDV1 — used by VideoBanner)
    if (base === 'IDV1' && !fs.existsSync(posterPath)) {
      try {
        await makePoster(backupPath, posterPath);
        console.log(`  ✓ Poster created:  ${posterPath}`);
      } catch (e) {
        console.error(`  ✗ Poster failed: ${e.message}`);
      }
    }
  }

  console.log('\nVideo compression complete.\n');
}

run();
