/**
 * Sidebar for CSE 494 Spring 2026 course
 * This is generated from the content.yml file
 */

const fs = require('fs');
const path = require('path');

// Read the content.yml to get the order of documents
const contentYmlPath = path.join(__dirname, 'docs', 'cse494s26', 'content.yml');
let sidebarItems = [];

if (fs.existsSync(contentYmlPath)) {
  const content = fs.readFileSync(contentYmlPath, 'utf-8');
  const items = content
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#'))
    .map(line => line.trim().replace(/^- /, ''));
  
  // Map to sidebar items with 'current/' prefix (for versioning)
  sidebarItems = items.map(item => `current/${item}`);
}

module.exports = {
  cse494s26Sidebar: sidebarItems,
};
