import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = ['public', 'app']; // Directories to scan
const extensions = ['.png', '.jpg', '.jpeg'];

// Helper to recursively list files
const getFiles = (dir, fileList = []) => {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            if (extensions.includes(path.extname(file).toLowerCase())) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
};

// Main function
const convertImages = async () => {
    const allImages = [];
    dirs.forEach(dir => getFiles(path.join(process.cwd(), dir), allImages));

    console.log(`Found ${allImages.length} images to convert.`);

    for (const imagePath of allImages) {
        const ext = path.extname(imagePath);
        const newPath = imagePath.substring(0, imagePath.lastIndexOf(ext)) + '.webp';

        try {
            await sharp(imagePath)
                .webp({ quality: 80 })
                .toFile(newPath);
            console.log(`Converted: ${imagePath} -> ${newPath}`);
        } catch (err) {
            console.error(`Failed to convert ${imagePath}:`, err);
        }
    }
};

convertImages();
