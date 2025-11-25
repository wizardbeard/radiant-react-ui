# Radiant React Design System

A modern, synthwave-inspired React component library featuring dark themes, neon glows, and retro-futuristic aesthetics. Built with React, TypeScript, Tailwind CSS, and fully documented in Storybook.

[![npm version](https://img.shields.io/npm/v/@wizardbeard/radiant-react-ui.svg)](https://www.npmjs.com/package/@wizardbeard/radiant-react-ui)
[![Storybook](https://img.shields.io/badge/Storybook-Live-ff4785)](https://wizardbeard.github.io/radiant-react-ui/)

## ✨ Features

- 🎨 **Synthwave Aesthetic** - Dark themes with electric blues, neon glows, and grainy textures
- 🧩 **50+ Components** - Comprehensive collection built on Radix UI primitives
- 📖 **Full Storybook Docs** - Interactive examples and usage guidelines
- 🎯 **TypeScript First** - Full type safety and IntelliSense support
- ⚡ **Tailwind CSS** - Utility-first styling with semantic design tokens
- ♿ **Accessible** - WCAG compliant components with keyboard navigation
- 🎭 **Customizable** - Easy theming through CSS variables

## 📦 Installation

```bash
npm install @wizardbeard/radiant-react-ui
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom
```

## 🚀 Quick Start

### 1. Import Styles

Add the component styles to your app's entry point (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@wizardbeard/radiant-react-ui/dist/style.css';
```

### 2. Configure Tailwind

Update your `tailwind.config.ts` to include the design system's paths:

```ts
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@wizardbeard/radiant-react-ui/dist/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        // ... add other semantic tokens
      }
    }
  }
}
```

### 3. Add CSS Variables

Include these CSS variables in your `index.css`:

```css
:root {
  --background: 220 40% 5%;
  --foreground: 210 40% 98%;
  --primary: 199 100% 50%;
  --primary-foreground: 220 40% 5%;
  /* ... see full token list in Storybook docs */
}
```

### 4. Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@wizardbeard/radiant-react-ui';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Radiant</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## 📚 Documentation

### Storybook

Browse the full component library with interactive examples:

**[View Storybook Documentation](https://wizardbeard.github.io/radiant-react-ui/)**

The Storybook includes:
- Component API documentation
- Interactive props controls
- Usage examples and code snippets
- Design guidelines and best practices
- Theming and customization guides

### Available Components

- **Form Controls**: Button, Input, Textarea, Select, Checkbox, Switch, Radio, Slider
- **Data Display**: Card, Table, Badge, Avatar, Tooltip, Progress, Skeleton
- **Navigation**: Tabs, Breadcrumb, Dropdown Menu, Navigation Menu, Sidebar
- **Feedback**: Alert, Dialog, Toast, Alert Dialog, Drawer, Sheet
- **Layout**: Separator, Scroll Area, Resizable, Aspect Ratio
- **Advanced**: Command, Context Menu, Hover Card, Popover, Calendar, Date Picker

## 🎨 Theming

The design system uses semantic color tokens that can be customized through CSS variables. All colors use HSL format for easy manipulation.

```css
:root {
  /* Primary colors */
  --primary: 199 100% 50%;        /* Electric blue */
  --secondary: 280 80% 60%;       /* Purple */
  --accent: 180 100% 50%;         /* Cyan */
  
  /* State colors */
  --destructive: 340 100% 60%;    /* Neon pink/magenta */
  --success: 142 76% 36%;
  --warning: 38 92% 50%;
  
  /* Effects */
  --noise-opacity: 0.03;
  --glow-intensity: 0.6;
}
```

See the [Theming Guide](https://wizardbeard.github.io/radiant-react-ui/?path=/docs/theming--docs) for complete customization options.

## 🛠 Development

### Prerequisites

- Node.js 18+ and npm
- React 18+

### Setup

```bash
# Clone the repository
git clone https://github.com/wizardbeard/radiant-react-ui.git
cd radiant-react-ui

# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build the library
npm run build:lib

# Build Storybook for deployment
npm run build-storybook
```

### Project Structure

```
radiant-react-ui/
├── src/
│   ├── components/ui/     # Component library
│   ├── stories/           # Storybook stories
│   ├── pages/             # Demo pages
│   └── index.css          # Design tokens
├── .storybook/            # Storybook configuration
└── dist/                  # Built library output
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © 2025 The Wizard & The Wyrd, LLC

## 🔗 Links

- [Storybook Documentation](https://wizardbeard.github.io/radiant-react-ui/)
- [GitHub Repository](https://github.com/wizardbeard/radiant-react-ui)
- [npm Package](https://www.npmjs.com/package/@wizardbeard/radiant-react-ui)
- [Report Issues](https://github.com/wizardbeard/radiant-react-ui/issues)

---

Built with ⚡ by [The Wizard & The Wyrd, LLC](https://github.com/wizardbeard)
