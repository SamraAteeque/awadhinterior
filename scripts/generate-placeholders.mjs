/**
 * Generates placeholder images for:
 *   public/team/member-1.jpg  — Mohd Kamaal Khalid (Founder)
 *   public/team/member-2.jpg  — Himayat (Founder)
 *   public/og-image.jpg       — Open Graph / social share preview
 *
 * Run once: node scripts/generate-placeholders.mjs
 * Replace with real photos before launch.
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

// ─── Helpers ─────────────────────────────────────────────────────────────────

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`  Created folder: ${dirPath}`);
    }
}

async function writeImage(svgBuffer, outPath, width, height) {
    await sharp(Buffer.from(svgBuffer))
        .resize(width, height)
        .jpeg({ quality: 90, mozjpeg: true })
        .toFile(outPath);
    const size = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(`  ✓  ${path.basename(outPath)}  (${width}×${height}, ${size} KB)`);
}

// ─── Team Member SVG Template ─────────────────────────────────────────────────

function teamMemberSVG(initials, fullName, role) {
    return `<svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="1000" fill="#1e3432"/>

  <!-- Subtle grid texture -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="1000" fill="url(#grid)"/>

  <!-- Circle backdrop -->
  <circle cx="400" cy="370" r="210" fill="#2a4542"/>
  <circle cx="400" cy="370" r="195" fill="#243f3d"/>

  <!-- Initials -->
  <text
    x="400" y="410"
    font-family="Georgia, serif"
    font-size="170"
    font-weight="bold"
    fill="#a1cca5"
    text-anchor="middle"
    dominant-baseline="middle"
  >${initials}</text>

  <!-- Divider -->
  <rect x="340" y="650" width="120" height="2" fill="#a1cca5" opacity="0.5" rx="1"/>

  <!-- Full Name -->
  <text
    x="400" y="700"
    font-family="Arial, Helvetica, sans-serif"
    font-size="38"
    font-weight="700"
    fill="#ffffff"
    text-anchor="middle"
  >${fullName}</text>

  <!-- Role -->
  <text
    x="400" y="752"
    font-family="Arial, Helvetica, sans-serif"
    font-size="22"
    font-weight="400"
    fill="#a1cca5"
    text-anchor="middle"
    letter-spacing="4"
  >${role.toUpperCase()}</text>

  <!-- Placeholder notice -->
  <text
    x="400" y="920"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18"
    fill="rgba(255,255,255,0.2)"
    text-anchor="middle"
  >Replace with real photo before launch</text>
</svg>`;
}

// ─── OG Image SVG Template ────────────────────────────────────────────────────

function ogImageSVG() {
    return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Left panel background -->
  <rect width="620" height="630" fill="#1e3432"/>

  <!-- Right panel background -->
  <rect x="620" width="580" height="630" fill="#152322"/>

  <!-- Subtle dot grid on left panel -->
  <defs>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="rgba(161,204,165,0.07)"/>
    </pattern>
    <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1e3432"/>
      <stop offset="100%" stop-color="#1e3432" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="620" height="630" fill="url(#dots)"/>

  <!-- Right panel decorative lines -->
  <line x1="620" y1="0" x2="620" y2="630" stroke="rgba(161,204,165,0.15)" stroke-width="1"/>
  <rect x="700" y="80" width="380" height="470" rx="16"
        fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Brand name top-left -->
  <text x="54" y="72"
    font-family="Arial, Helvetica, sans-serif"
    font-size="13" font-weight="700"
    fill="#a1cca5" letter-spacing="3">AWADH INTERIOR DESIGNER</text>
  <rect x="54" y="82" width="60" height="2" fill="#a1cca5" rx="1" opacity="0.5"/>

  <!-- Main headline -->
  <text x="54" y="200"
    font-family="Georgia, serif"
    font-size="72" font-weight="700"
    fill="#ffffff">Spaces</text>
  <text x="54" y="285"
    font-family="Georgia, serif"
    font-size="72" font-weight="700"
    fill="#ffffff">Designed</text>
  <text x="54" y="370"
    font-family="Georgia, serif"
    font-size="72" font-style="italic"
    fill="#a1cca5">to Live In.</text>

  <!-- Sub line -->
  <text x="54" y="440"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18" fill="rgba(255,255,255,0.55)">Residential · Commercial · Eastern UP</text>

  <!-- Bottom stats row -->
  <text x="54" y="540"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32" font-weight="700" fill="#ffffff">200+</text>
  <text x="54" y="568"
    font-family="Arial, Helvetica, sans-serif"
    font-size="12" fill="#a1cca5" letter-spacing="2">PROJECTS</text>

  <rect x="160" y="520" width="1" height="52" fill="rgba(255,255,255,0.15)"/>

  <text x="180" y="540"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32" font-weight="700" fill="#ffffff">5+</text>
  <text x="180" y="568"
    font-family="Arial, Helvetica, sans-serif"
    font-size="12" fill="#a1cca5" letter-spacing="2">YEARS</text>

  <rect x="270" y="520" width="1" height="52" fill="rgba(255,255,255,0.15)"/>

  <text x="290" y="540"
    font-family="Arial, Helvetica, sans-serif"
    font-size="32" font-weight="700" fill="#ffffff">₹0</text>
  <text x="290" y="568"
    font-family="Arial, Helvetica, sans-serif"
    font-size="12" fill="#a1cca5" letter-spacing="2">CONSULTATION</text>

  <!-- Right panel: Interior showcase placeholder -->
  <rect x="700" y="80" width="380" height="470" rx="16" fill="rgba(255,255,255,0.03)"/>

  <!-- Decorative interior lines suggesting a room -->
  <line x1="840" y1="120" x2="840" y2="520" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <line x1="700" y1="300" x2="1080" y2="300" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <text x="890" y="275"
    font-family="Georgia, serif"
    font-size="22" font-style="italic"
    fill="rgba(255,255,255,0.2)" text-anchor="middle">Interior Preview</text>
  <text x="890" y="310"
    font-family="Arial, Helvetica, sans-serif"
    font-size="13"
    fill="rgba(255,255,255,0.12)" text-anchor="middle">Add hero.jpg for final version</text>

  <!-- CTA pill -->
  <rect x="700" y="510" width="380" height="42" rx="21"
        fill="#a1cca5"/>
  <text x="890" y="536"
    font-family="Arial, Helvetica, sans-serif"
    font-size="14" font-weight="700"
    fill="#1e3432" text-anchor="middle" letter-spacing="1">FREE CONSULTATION</text>

  <!-- Website URL bottom right -->
  <text x="1146" y="618"
    font-family="Arial, Helvetica, sans-serif"
    font-size="13"
    fill="rgba(255,255,255,0.3)"
    text-anchor="end">awadhinteriordesigner.in</text>
</svg>`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
    console.log('\n Generating placeholder images...\n');

    // ── Team photos ──────────────────────────────────────────────────────────
    const teamDir = path.join(publicDir, 'team');
    ensureDir(teamDir);

    await writeImage(
        teamMemberSVG('MK', 'Mohd Kamaal Khalid', 'Founder'),
        path.join(teamDir, 'member-1.jpg'),
        800, 1000
    );

    await writeImage(
        teamMemberSVG('H', 'Himayat', 'Founder'),
        path.join(teamDir, 'member-2.jpg'),
        800, 1000
    );

    // ── OG image ─────────────────────────────────────────────────────────────
    await writeImage(
        ogImageSVG(),
        path.join(publicDir, 'og-image.jpg'),
        1200, 630
    );

    console.log('\n ✅ Done! All 3 images created.\n');
    console.log(' ┌─────────────────────────────────────────────────────┐');
    console.log(' │  NEXT STEPS                                          │');
    console.log(' │                                                      │');
    console.log(' │  Team photos are placeholder branded cards.          │');
    console.log(' │  Replace them with real founder photos:              │');
    console.log(' │                                                      │');
    console.log(' │  1. Take a clear photo of each founder               │');
    console.log(' │  2. Rename to member-1.jpg / member-2.jpg            │');
    console.log(' │  3. Paste into public/team/ — overwrite the file     │');
    console.log(' │                                                      │');
    console.log(' │  For og-image: use scripts/generate-og-image.html   │');
    console.log(' │  in Chrome (F12 → 1200×630) for the final version.  │');
    console.log(' └─────────────────────────────────────────────────────┘\n');
}

main().catch(err => {
    console.error('\n Error:', err.message);
    process.exit(1);
});
