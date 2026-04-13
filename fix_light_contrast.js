import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, '.');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    const replacements = [
        { regex: /\btext-slate-400 dark:text-slate-400\b/g, replace: 'text-slate-600 dark:text-slate-400' },
        { regex: /\btext-slate-500 dark:text-slate-400\b/g, replace: 'text-slate-600 dark:text-slate-400' },
        { regex: /(?<!dark:)\btext-slate-400\b(?!\s*dark:text-)/g, replace: 'text-slate-600 dark:text-slate-400' },
        { regex: /(?<!dark:)\btext-slate-500\b(?!\s*dark:text-)/g, replace: 'text-slate-600 dark:text-slate-400' }
    ];

    for (let r of replacements) {
        content = content.replace(r.regex, r.replace);
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function traverse(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
                traverse(fullPath);
            }
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
            processFile(fullPath);
        }
    });
}

traverse(directoryPath);
