const fs = require('fs');
const path = require('path');

const directoryPath = 'd:/bloopha_main/bloopha-website/public/images/pot';

function getImageDimensions(filePath) {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);

    // Check for PNG signature
    if (buffer.toString('hex', 0, 8) === '89504e470d0a1a0a') {
        const width = buffer.readUInt32BE(16);
        const height = buffer.readUInt32BE(20);
        return { width, height };
    }
    return null;
}

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach((file) => {
        if (path.extname(file).toLowerCase() === '.png') {
            const dimensions = getImageDimensions(path.join(directoryPath, file));
            if (dimensions) {
                const ratio = (dimensions.width / dimensions.height).toFixed(2);
                let type = 'Square';
                if (ratio > 1.2) type = 'Wide';
                if (ratio < 0.8) type = 'Tall';
                console.log(`${file}: ${dimensions.width}x${dimensions.height} (Ratio: ${ratio}, Type: ${type})`);
            }
        }
    });
});
