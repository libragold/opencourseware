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

1. Edit markdown files directly in `docs/cse494s26/`
2. The dev server will automatically reload with your changes

## Project Structure

```
opencourseware/
├── docs/                 # Course documentation
│   └── cse494s26/        # Course content (edit here)
├── src/                  # Docusaurus source
└── static/               # Static assets
```

## Common Tasks

- **View site locally**: `npm start`
- **Build for production**: `npm run build`
