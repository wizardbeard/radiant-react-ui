import type { Preview } from "@storybook/react";
import { create } from "@storybook/theming/create";
import "../src/index.css";

const synthwaveTheme = create({
  base: "dark",
  
  // Brand
  brandTitle: "Synthwave Design System",
  brandUrl: "/",
  brandTarget: "_self",
  
  // Colors - matching your synthwave palette
  colorPrimary: "#00d9ff", // Electric blue (cyan)
  colorSecondary: "#9333ea", // Purple
  
  // UI colors - dark synthwave background
  appBg: "#0a0a0f",
  appContentBg: "#13131a",
  appBorderColor: "rgba(0, 217, 255, 0.2)",
  appBorderRadius: 8,
  
  // Typography
  fontBase: "'Space Mono', monospace",
  fontCode: "'Space Mono', monospace",
  
  // Text colors
  textColor: "#e2e8f0",
  textInverseColor: "#0a0a0f",
  textMutedColor: "#94a3b8",
  
  // Toolbar
  barTextColor: "#e2e8f0",
  barSelectedColor: "#00d9ff",
  barBg: "#13131a",
  
  // Form colors
  inputBg: "#1a1a24",
  inputBorder: "rgba(0, 217, 255, 0.3)",
  inputTextColor: "#e2e8f0",
  inputBorderRadius: 6,
});

const preview: Preview = {
  parameters: {
    darkMode: {
      current: "dark",
      dark: synthwaveTheme,
      light: synthwaveTheme, // Use dark theme for both
    },
    docs: {
      theme: synthwaveTheme,
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#0a0a0f",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
