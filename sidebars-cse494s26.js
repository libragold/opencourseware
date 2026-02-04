/**
 * Sidebar for CSE 494 Spring 2026 course
 * This is generated from the markdown files in the current directory
 */

const fs = require('fs');
const path = require('path');

// Define the order of documents (index first, then syllabus, then others)
const preferredOrder = [
  'index',
  'syllabus',
  'leaderboard',
  'foundations',
  'graphs-1',
  'dynamic-programming-1',
  'range-queries-1',
  'combinatorics',
  'number-theory',
  'trees',
  'midterm-review',
  'strings',
  'geometry',
  'graphs-2',
  'dynamic-programming-2',
  'range-queries-2',
  'flows',
  'game-theory',
  'final-review',
];

// Read the current directory to get all markdown files
const currentDir = path.join(__dirname, 'docs', 'cse494s26');
let sidebarItems = [];

if (fs.existsSync(currentDir)) {
  const files = fs.readdirSync(currentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
  
  // Sort files: preferred order first, then any others alphabetically
  const ordered = [];
  const unordered = [];
  
  for (const file of files) {
    const index = preferredOrder.indexOf(file);
    if (index !== -1) {
      ordered[index] = file;
    } else {
      unordered.push(file);
    }
  }
  
  // Combine ordered items (filtering out undefined) and unordered items
  sidebarItems = [
    ...ordered.filter(item => item !== undefined),
    ...unordered.sort()
  ];
}

module.exports = {
  cse494s26Sidebar: sidebarItems,
};
