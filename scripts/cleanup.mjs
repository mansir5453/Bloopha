import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const dirsToClean = [
    path.join(rootDir, 'public', 'images', 'pot'),
    // Add other specific directories here if needed. 
    // NOT cleaning 'app' to avoid deleting icons referenced in manifest
    // NOT cleaning 'public' root to avoid deleting favicon/logo variants that might be needed
];

const extensions = ['.png', '.jpg', '.jpeg'];

const cleanup = () => {
    let deletedCount = 0;

    dirsToClean.forEach(dir => {
        if (!fs.existsSync(dir)) return;

        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const ext = path.extname(file).toLowerCase();
            if (extensions.includes(ext)) {
                const filePath = path.join(dir, file);
                const webpPath = filePath.substring(0, filePath.lastIndexOf(ext)) + '.webp';

                if (fs.existsSync(webpPath)) {
                    console.log(`Deleting ${filePath} (WebP exists)`);
                    fs.unlinkSync(filePath);
                    deletedCount++;
                } else {
                    console.log(`Skipping ${filePath} (No WebP found)`);
                }
            }
        });
    });

    console.log(`Cleanup complete. Deleted ${deletedCount} files.`);
};

cleanup();
