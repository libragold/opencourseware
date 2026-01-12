# Open Courseware

A Docusaurus-based website for managing multiple courses with versioning support.

## Structure

- `courses/` - Source markdown files for each course (source of truth)
- `docs/` - Processed course documentation for Docusaurus
- `scripts/` - Utility scripts for course management
- `src/` - Docusaurus source files (pages, CSS, etc.)
- `static/` - Static assets (images, etc.)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Adding a New Course

### Option 1: Using the helper script (Recommended)

```bash
npm run add:course -- <course-id> <course-name> [route-base-path]
```

Example:
```bash
npm run add:course -- cse494s26 "CSE 494" courses/cse494s26
```

This will:
- Migrate content from `courses/<course-id>/` to `docs/<course-id>/current/`
- Create a sidebar configuration file
- Provide instructions for updating `docusaurus.config.js`

### Option 2: Manual setup

1. Create a new directory in `courses/<course-id>/` with your markdown files
2. Create a `content.yml` file listing the order of documents (one per line, without .md extension)
3. Run the migration script:
```bash
npm run migrate:course -- <course-id>
```
4. Create a sidebar file `sidebars-<course-id>.js` (see `sidebars-cse494s26.js` as an example)
5. Add the course plugin configuration to `docusaurus.config.js`:
```javascript
plugins: [
  [
    '@docusaurus/plugin-content-docs',
    {
      id: '<course-id>',
      path: 'docs/<course-id>',
      routeBasePath: 'courses/<course-id>',
      sidebarPath: require.resolve('./sidebars-<course-id>.js'),
      versions: {
        current: {
          label: 'Current Semester',
          path: 'current',
        },
      },
      includeCurrentVersion: true,
    },
  ],
],
```
6. Update `sidebars.js` and homepage to include links to the new course

## Versioning a Course

When a semester ends, create a versioned snapshot:

```bash
npm run version:course -- <course-id> <version-label>
```

Example:
```bash
npm run version:course -- cse494s26 "Spring 2026"
```

This will:
- Create a versioned copy of the course content in `docs/<course-id>/<version-id>/`
- Preserve the current semester's content as an archive
- Allow the `current/` directory to continue updating for the new semester

After versioning, update `docusaurus.config.js` to include the new version:

```javascript
versions: {
  current: {
    label: 'Fall 2026',  // Update for new semester
    path: 'current',
  },
  'spring-2026': {  // Version ID (auto-generated from label)
    label: 'Spring 2026',
    path: 'spring-2026',
  },
},
```

## Course Structure

Each course should have:
- `content.yml` - Ordered list of document filenames (without .md extension)
- Markdown files with frontmatter containing at least a `title` field

Example `content.yml`:
```yaml
- syllabus
- foundations
- graphs
- dynamic-programming-1
```

Example markdown frontmatter:
```markdown
---
title: "Foundations"
---

# Foundations
...
```

## Workflow

1. **During Semester**: Edit markdown files in `courses/<course-id>/` and migrate to `docs/<course-id>/current/`
2. **End of Semester**: Run versioning script to create a snapshot
3. **New Semester**: Continue editing `current/` directory for the new semester
4. **Multiple Versions**: All versions are accessible via the version dropdown in the course navigation

## Development

- Edit source files in `courses/` directory
- After editing, run `npm run migrate:course -- <course-id>` to update the docs
- The development server will hot-reload changes automatically
