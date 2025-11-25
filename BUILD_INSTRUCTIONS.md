# Build Instructions for Radiant React UI

This project supports two build modes:

## 1. App Build (Landing Page / Demo)
Builds the full application including pages, routing, and examples for deployment to Netlify.

```bash
npm run build
```

Output: `dist/` directory

## 2. Library Build (NPM Package)
Builds only the UI components for publishing to NPM.

```bash
npm run build:lib
```

Output: `dist/lib/` directory

## Package.json Configuration

To enable NPM publishing, add the following to your `package.json`:

### Required Fields

```json
{
  "name": "@wizardbeard/radiant-react-ui",
  "version": "0.1.0",
  "description": "A modern synthwave-themed React component library built with Tailwind CSS",
  "author": "The Wizard & The Wyrd, LLC",
  "license": "MIT",
  "keywords": ["react", "components", "ui", "design-system", "tailwind", "synthwave"],
  "repository": {
    "type": "git",
    "url": "https://github.com/wizardbeard/radiant-react-ui"
  },
  "homepage": "https://radiant-react.netlify.app",
  "bugs": "https://github.com/wizardbeard/radiant-react-ui/issues",
  
  "main": "./dist/lib/radiant-react-ui.cjs",
  "module": "./dist/lib/radiant-react-ui.js",
  "types": "./dist/lib/lib.d.ts",
  "exports": {
    ".": {
      "import": "./dist/lib/radiant-react-ui.js",
      "require": "./dist/lib/radiant-react-ui.cjs",
      "types": "./dist/lib/lib.d.ts"
    },
    "./styles": "./dist/lib/radiant-react-ui.css"
  },
  
  "files": [
    "dist/lib",
    "README.md",
    "LICENSE"
  ],
  
  "scripts": {
    "build": "vite build",
    "build:lib": "vite build --config vite.config.lib.ts && tsc --emitDeclarationOnly --declaration --declarationDir dist/lib --project tsconfig.json"
  },
  
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

### Notes

1. **TypeScript Declarations**: The `build:lib` script includes TypeScript declaration generation
2. **Peer Dependencies**: React and React-DOM are peer dependencies (not bundled with the library)
3. **Files Field**: Only the `dist/lib` directory and documentation files are published to NPM
4. **CSS Export**: Users can import styles via `import '@wizardbeard/radiant-react-ui/styles'`

## Publishing to NPM

### First Time Setup

1. Create an NPM account at https://www.npmjs.com/signup
2. Log in via CLI:
   ```bash
   npm login
   ```

### Publishing

1. Build the library:
   ```bash
   npm run build:lib
   ```

2. Test the package locally (optional):
   ```bash
   npm pack
   # This creates a .tgz file you can test in another project
   ```

3. Publish to NPM:
   ```bash
   npm publish --access public
   ```

   Note: `--access public` is required for scoped packages like `@wizardbeard/...`

### Version Updates

Before publishing updates, increment the version:

```bash
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.0 -> 0.2.0
npm version major  # 0.1.0 -> 1.0.0
```

Then publish:
```bash
npm run build:lib && npm publish
```

## Usage in Other Projects

Once published, users can install your library:

```bash
npm install @wizardbeard/radiant-react-ui
```

And use it:

```tsx
import { Button, Card } from '@wizardbeard/radiant-react-ui';
import '@wizardbeard/radiant-react-ui/styles';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

## Important Notes

1. **Tailwind CSS**: Users of your library will need to have Tailwind CSS configured in their project and include your design tokens
2. **CSS Variables**: The synthwave theme uses CSS variables defined in `index.css` - users need to include these
3. **Fonts**: Users need to include the Orbitron and Space Mono fonts (or update the CSS variables)

Consider creating a separate "Getting Started" guide for users of your NPM package.
