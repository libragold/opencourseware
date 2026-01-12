# Quick Start Guide

## First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   This will start the site at `http://localhost:3000`

## Daily Workflow

### Editing Course Content

1. Edit markdown files in `courses/<course-id>/`
2. After making changes, migrate them to the docs:
   ```bash
   npm run migrate:course -- <course-id>
   ```
3. The dev server will automatically reload with your changes

### Adding a New Course

```bash
npm run add:course -- <course-id> <course-name>
```

Then follow the instructions it prints to update `docusaurus.config.js`.

### Versioning a Course (End of Semester)

```bash
npm run version:course -- <course-id> <version-label>
```

Example:
```bash
npm run version:course -- cse494s26 "Spring 2026"
```

Then update `docusaurus.config.js` to add the version to the `versions` object.

## Project Structure

```
opencourseware/
├── courses/              # Source markdown files (edit here)
│   └── cse494s26/
│       ├── content.yml   # Order of documents
│       └── *.md          # Course content
├── docs/                 # Processed docs for Docusaurus
│   └── courses/
│       └── cse494s26/
│           ├── current/   # Current semester
│           └── <version>/ # Archived versions
├── scripts/              # Helper scripts
├── src/                  # Docusaurus source
└── static/               # Static assets
```

## Common Tasks

- **View site locally**: `npm start`
- **Build for production**: `npm run build`
- **Migrate course changes**: `npm run migrate:course -- <course-id>`
- **Version a course**: `npm run version:course -- <course-id> <label>`
