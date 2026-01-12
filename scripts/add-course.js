#!/usr/bin/env node

/**
 * Script to add a new course to the Docusaurus site
 * Usage: node scripts/add-course.js <course-id> <course-name> <route-base-path>
 * Example: node scripts/add-course.js cse494s26 "CSE 494" courses/cse494s26
 */

const fs = require('fs');
const path = require('path');

const courseId = process.argv[2];
const courseName = process.argv[3];
const routeBasePath = process.argv[4] || `courses/${courseId}`;

if (!courseId || !courseName) {
  console.error('Usage: node scripts/add-course.js <course-id> <course-name> [route-base-path]');
  console.error('Example: node scripts/add-course.js cse494s26 "CSE 494" courses/cse494s26');
  process.exit(1);
}

const sourcePath = path.join(__dirname, '..', 'courses', courseId);
const destPath = path.join(__dirname, '..', 'docs', courseId, 'current');

if (!fs.existsSync(sourcePath)) {
  console.error(`Course directory not found: ${sourcePath}`);
  console.error('Please create the course directory with markdown files first.');
  process.exit(1);
}

// Create destination directory
if (!fs.existsSync(destPath)) {
  fs.mkdirSync(destPath, { recursive: true });
}

// Migrate course content
const migrateScript = path.join(__dirname, 'migrate-course.js');
const { execSync } = require('child_process');
execSync(`node ${migrateScript} ${courseId}`, { stdio: 'inherit' });

// Create sidebar file
const sidebarPath = path.join(__dirname, '..', `sidebars-${courseId}.js`);
const sidebarContent = `/**
 * Sidebar for ${courseName}
 * This is generated from the content.yml file
 */

const fs = require('fs');
const path = require('path');

// Read the content.yml to get the order of documents
const contentYmlPath = path.join(__dirname, 'docs', '${courseId}', 'content.yml');
let sidebarItems = [];

if (fs.existsSync(contentYmlPath)) {
  const content = fs.readFileSync(contentYmlPath, 'utf-8');
  const items = content
    .split('\\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => line.trim().replace(/^- /, ''));
  
  sidebarItems = items;
}

module.exports = {
  ${courseId}Sidebar: sidebarItems,
};
`;

fs.writeFileSync(sidebarPath, sidebarContent);

console.log(`\n✓ Course ${courseId} added successfully!`);
console.log(`\nNext steps:`);
console.log(`1. Add the plugin configuration to docusaurus.config.js:`);
console.log(`   [`);
console.log(`     '@docusaurus/plugin-content-docs',`);
console.log(`     {`);
console.log(`       id: '${courseId}',`);
console.log(`       path: 'docs/${courseId}',`);
console.log(`       routeBasePath: '${routeBasePath}',`);
console.log(`       sidebarPath: require.resolve('./sidebars-${courseId}.js'),`);
console.log(`       versions: {`);
console.log(`         current: {`);
console.log(`           label: 'Current Semester',`);
console.log(`           path: 'current',`);
console.log(`         },`);
console.log(`       },`);
console.log(`       includeCurrentVersion: true,`);
console.log(`     },`);
console.log(`   ],`);
console.log(`\n2. Add the course link to sidebars.js and the homepage`);
