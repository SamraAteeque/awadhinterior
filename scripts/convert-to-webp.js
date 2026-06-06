import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function convertToWebP(dir) {
    try {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                await convertToWebP(filePath);
            } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
                const ext = path.extname(file);
                const basename = path.basename(file, ext);
                const webpPath = path.join(dir, `${basename}.webp`);

                // Convert only if the webp doesn't already exist
                if (!fs.existsSync(webpPath)) {
                    console.log(`Converting ${filePath} to WebP...`);
                    try {
                        await sharp(filePath)
                            .webp({ quality: 80 })
                            .toFile(webpPath);
                        console.log(`Successfully created ${webpPath}`);
                    } catch (err) {
                        console.error(`Error converting ${filePath}:`, err);
                    }
                } else {
                    console.log(`Skipping ${filePath}, WebP already exists.`);
                }
            }
        }
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

console.log('Starting WebP conversion...');
convertToWebP(PUBLIC_DIR).then(() => console.log('Done converting images.'));
