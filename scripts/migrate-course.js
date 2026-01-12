#!/usr/bin/env node

/**
 * Script to migrate course content from courses/ to docs/
 * Usage: node scripts/migrate-course.js <course-id>
 */

const fs = require('fs');
const path = require('path');

const courseId = process.argv[2];

if (!courseId) {
  console.error('Usage: node scripts/migrate-course.js <course-id>');
  process.exit(1);
}

const sourcePath = path.join(__dirname, '..', 'courses', courseId);
const destPath = path.join(__dirname, '..', 'docs', courseId, 'current');
const contentYmlPath = path.join(sourcePath, 'content.yml');

if (!fs.existsSync(sourcePath)) {
  console.error(`Course directory not found: ${sourcePath}`);
  process.exit(1);
}

if (!fs.existsSync(contentYmlPath)) {
  console.error(`content.yml not found: ${contentYmlPath}`);
  process.exit(1);
}

// Read content.yml to get ordered list
const content = fs.readFileSync(contentYmlPath, 'utf-8');
const items = content
  .split('\n')
  .filter(line => line.trim() && !line.startsWith('#'))
  .map(line => line.trim().replace(/^- /, ''));

// Create destination directory
if (!fs.existsSync(destPath)) {
  fs.mkdirSync(destPath, { recursive: true });
}

// Copy markdown files
let copiedCount = 0;
items.forEach(item => {
  const sourceFile = path.join(sourcePath, `${item}.md`);
  const destFile = path.join(destPath, `${item}.md`);
  
  if (fs.existsSync(sourceFile)) {
    fs.copyFileSync(sourceFile, destFile);
    copiedCount++;
    console.log(`✓ Copied ${item}.md`);
  } else {
    console.warn(`⚠ File not found: ${sourceFile}`);
  }
});

console.log(`\n✓ Migration complete! Copied ${copiedCount} files to ${destPath}`);
