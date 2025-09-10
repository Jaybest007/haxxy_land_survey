// resize-logo.js
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_LOGO = path.join(__dirname, '../src/assets/haxxy_logo.png');
const TARGET_DIR = path.join(__dirname, '../public');

// Create target directory if it doesn't exist
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

// Define sizes for different purposes
const sizes = [
  { width: 16, height: 16, name: 'haxxy_logo_16x16.png' },
  { width: 32, height: 32, name: 'haxxy_logo_32x32.png' },
  { width: 96, height: 96, name: 'haxxy_logo_96x96.png' },
  { width: 128, height: 128, name: 'haxxy_logo_128x128.png' },
  { width: 152, height: 152, name: 'haxxy_logo_152x152.png' },
  { width: 180, height: 180, name: 'haxxy_logo_180x180.png' },
  { width: 192, height: 192, name: 'haxxy_logo_192x192.png' },
  { width: 512, height: 512, name: 'haxxy_logo.png' }
];

// Copy and resize the logo
async function resizeLogos() {
  try {
    for (const size of sizes) {
      await sharp(SOURCE_LOGO)
        .resize(size.width, size.height)
        .toFile(path.join(TARGET_DIR, size.name));
      
      console.log(`Created ${size.name} (${size.width}x${size.height})`);
    }
    console.log('All logo variations have been created successfully!');
  } catch (error) {
    console.error('Error creating logo variations:', error);
  }
}

resizeLogos();
