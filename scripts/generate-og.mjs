/**
 * Genera public/og-image.png a partir de public/og-image.svg
 * Instala sharp una sola vez: npm install -D sharp
 * Luego ejecuta: node scripts/generate-og.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('❌ sharp no encontrado. Instálalo con: npm install -D sharp');
  process.exit(1);
}

const svgBuffer = readFileSync(join(root, 'public', 'og-image.svg'));

const png = await sharp(svgBuffer)
  .resize(1200, 630)
  .png()
  .toBuffer();

writeFileSync(join(root, 'public', 'og-image.png'), png);
console.log('✅ public/og-image.png generado (1200x630)');
