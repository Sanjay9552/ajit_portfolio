const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFolder = './LowRes';
const outputFolder = path.join(inputFolder, 'webp');

const quality =20

// Create output folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Convert JPEG to WebP
fs.readdirSync(inputFolder).forEach(file => {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const inputPath = path.join(inputFolder, file);
        const outputFileName = path.parse(file).name + '.webp';
        const outputPath = path.join(outputFolder, outputFileName);

        sharp(inputPath)
            .toFormat('webp',{ quality })
            .toFile(outputPath)
            .then(() => {
                console.log(`Converted ${file} to ${outputFileName}`);
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    }
});

console.log('Conversion completed.');
