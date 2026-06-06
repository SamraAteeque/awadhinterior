import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public'); // Adjust path as needed
const originalHeroPath = path.join(publicDir, 'hero.jpg');
const mobileHeroPath = path.join(publicDir, 'hero-mobile.jpg');

async function generateMobileHero() {
    if (fs.existsSync(originalHeroPath)) {
        try {
            await sharp(originalHeroPath)
                .resize({ width: 600, withoutEnlargement: true }) // Resize to typical mobile width
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(mobileHeroPath);

            console.log(`Generated mobile hero: ${mobileHeroPath}`);
        } catch (error) {
            console.error('Error generating mobile hero:', error);
        }
    } else {
        console.warn('Original hero.jpg not found.');
    }
}

generateMobileHero();
