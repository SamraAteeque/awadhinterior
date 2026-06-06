import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const originalDir = path.join(__dirname, '../public/originals');

// Ensure originals directory exists
if (!fs.existsSync(originalDir)) {
    fs.mkdirSync(originalDir, { recursive: true });
}

const imagesToCompress = [
    { name: 'hero.jpg', width: 1920, quality: 80 },
    { name: 'ID1.jpg', width: 1200, quality: 80 },
    { name: 'ID2.jpg', width: 1200, quality: 80 },
    { name: 'ID3.jpg', width: 1200, quality: 80 },
    { name: 'ID4.jpg', width: 1200, quality: 80 },
    { name: 'ID5.jpg', width: 1200, quality: 80 },
    { name: 'ID6.jpg', width: 1200, quality: 80 },
];

async function compressImages() {
    for (const img of imagesToCompress) {
        const inputPath = path.join(publicDir, img.name);
        const backupPath = path.join(originalDir, img.name);
        const outputPath = path.join(publicDir, img.name); // Overwrite original in public

        if (fs.existsSync(inputPath)) {
            // Backup original if not already backed up
            if (!fs.existsSync(backupPath)) {
                fs.copyFileSync(inputPath, backupPath);
                console.log(`Backed up: ${img.name}`);
            }

            try {
                // Compress using backup as source to avoid re-compressing artifacts
                await sharp(backupPath)
                    .resize({ width: img.width, withoutEnlargement: true })
                    .jpeg({ quality: img.quality, mozjpeg: true })
                    .toFile(outputPath);

                console.log(`Compressed: ${img.name}`);
            } catch (error) {
                console.error(`Error compressing ${img.name}:`, error);
            }
        } else {
            console.warn(`File not found: ${img.name}`);
        }
    }
}

compressImages();
