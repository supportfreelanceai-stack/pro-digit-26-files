#!/usr/bin/env node
/**
 * generate-links.js
 *
 * Mamaky ny dossier pdf/ sy covers/ ao amin'ity repository ity (amin'ny solosainao,
 * alohan'ny "git push"), dia mamorona rakitra "liens-genere.csv" feno ny lien "raw.githubusercontent.com"
 * mivantana ho an'ny PDF sy sary rehetra hitany — mba tsy hilanao manoratra/manindry
 * ny lien "Raw" tanana isaky ny rakitra ao amin'ny navigateur.
 *
 * FAMPIASANA:
 *   1. Ovay ny GITHUB_USER sy REPO_NAME etsy ambany araka ny an-tenanao.
 *   2. Ataovy "node scripts/generate-links.js" ao amin'ny "terminal", eo anivon'ilay
 *      dossier fototry ny repository ity (io misy ny dossier pdf/ sy covers/).
 *   3. Hipoitra ny rakitra "liens-genere.csv" — sokafy amin'i Excel/Google Sheets,
 *      dia kopia-apetaho (copy-paste) ao amin'ny tsanganana "sary"/"lien" an'ny Feuille 2.
 *
 * TSY MILA "npm install" na dependency hafa — JavaScript "tsotra" ihany (Node.js core modules).
 */

const fs = require('fs');
const path = require('path');

// ---- OVAY ETO ARAKA NY ANAO ----
const GITHUB_USER = 'ANARAN-COMPTE';   // <-- soloy amin'ny anaran'ny compte GitHub-nao
const REPO_NAME = 'pro-digit-26-files'; // <-- soloy raha hafa ny anaran'ny repository
const BRANCH = 'main';                  // <-- soloy amin'ny "master" raha izay no ampiasainao
// ---------------------------------

const ROOT = path.join(__dirname, '..');
const FOLDERS_TO_SCAN = ['pdf', 'covers'];

function walk(dir, fileList) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, fileList);
    } else if (entry.isFile() && entry.name !== '.gitkeep') {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

function toRawUrl(absolutePath) {
  const relative = path.relative(ROOT, absolutePath).split(path.sep).join('/');
  return `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/${BRANCH}/${relative}`;
}

let allFiles = [];
FOLDERS_TO_SCAN.forEach((folder) => {
  const folderPath = path.join(ROOT, folder);
  if (fs.existsSync(folderPath)) {
    walk(folderPath, allFiles);
  }
});

if (allFiles.length === 0) {
  console.log('Tsy nahita rakitra tao amin\'ny pdf/ na covers/. Ampidiro rakitra aloha vao ataovy ity script ity.');
  process.exit(0);
}

const rows = ['dossier,anaram-drakitra,lien'];
allFiles.forEach((f) => {
  const folderType = f.includes(`${path.sep}pdf${path.sep}`) ? 'pdf' : 'covers';
  rows.push(`${folderType},${path.basename(f)},${toRawUrl(f)}`);
});

const outputPath = path.join(ROOT, 'liens-genere.csv');
fs.writeFileSync(outputPath, rows.join('\n'), 'utf8');

console.log(`Vita! ${allFiles.length} lien voaforona ao amin'ny: ${outputPath}`);
console.log('Sokafy amin\'ny Excel/Google Sheets, dia kopia-apetaho ao amin\'ny Feuille 2 (tsanganana sary/lien).');
