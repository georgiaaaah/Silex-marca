const sharp = require('sharp');
const fs = require('fs');

async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to ${outputPath} successfully.`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

async function main() {
  await convertImage("public/imagens/fachada.png", "public/imagens/fachada.webp");
  await convertImage("public/imagens/book mckup site.png", "public/imagens/book_mckup_site.webp");
}

main();
