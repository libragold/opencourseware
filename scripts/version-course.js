#!/usr/bin/env node

/**
 * Script to version a course when the semester ends
 * Usage: npm run version:course -- <course-id> <version-label>
 * Example: npm run version:course -- cse494s26 "Spring 2026"
 * 
 * This creates a versioned snapshot following Docusaurus versioning conventions.
 */

const fs = require('fs');
const path = require('path');

const courseId = process.argv[2];
const versionLabel = process.argv[3];

if (!courseId || !versionLabel) {
  console.error('Usage: npm run version:course -- <course-id> <version-label>');
  console.error('Example: npm run version:course -- cse494s26 "Spring 2026"');
  process.exit(1);
}

const coursePath = path.join(__dirname, '..', 'docs', courseId);
const currentPath = path.join(coursePath, 'current');

if (!fs.existsSync(coursePath)) {
  console.error(`Course directory not found: ${coursePath}`);
  process.exit(1);
}

if (!fs.existsSync(currentPath)) {
  console.error(`Current directory not found: ${currentPath}`);
  console.error('Please migrate the course first using: node scripts/migrate-course.js <course-id>');
  process.exit(1);
}

// Create version ID from label (e.g., "Spring 2026" -> "spring-2026")
const versionId = versionLabel.toLowerCase().replace(/\s+/g, '-');
const versionedPath = path.join(coursePath, versionId);

if (fs.existsSync(versionedPath)) {
  console.error(`Version ${versionId} already exists!`);
  process.exit(1);
}

// Copy current docs to versioned directory
console.log(`Creating version ${versionId}...`);
copyRecursiveSync(currentPath, versionedPath);

// Create versioned sidebar file
const sidebarPath = path.join(coursePath, 'sidebars.js');
const versionedSidebarPath = path.join(versionedPath, 'sidebars.js');
if (fs.existsSync(sidebarPath)) {
  fs.copyFileSync(sidebarPath, versionedSidebarPath);
}

console.log(`✓ Created version ${versionId} for course ${courseId}`);
console.log(`  Label: ${versionLabel}`);
console.log(`  Path: ${versionedPath}`);
console.log(`\nNext steps:`);
console.log(`1. Update docusaurus.config.js to add this version:`);
console.log(`   versions: {`);
console.log(`     current: { label: 'Current Semester', path: 'current' },`);
console.log(`     '${versionId}': { label: '${versionLabel}', path: '${versionId}' },`);
console.log(`   }`);
console.log(`2. The current directory will continue to be updated for the new semester`);

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}
