import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const WithBlueGlow: Story = {
  args: {
    children: "Blue Glow",
  },
  render: (args) => (
    <button {...args} className="glow-blue rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
      {args.children}
    </button>
  ),
};

export const WithPinkGlow: Story = {
  args: {
    children: "Pink Glow",
  },
  render: (args) => (
    <button {...args} className="glow-pink rounded-md bg-destructive px-4 py-2 text-destructive-foreground hover:bg-destructive/90">
      {args.children}
    </button>
  ),
};

export const WithCyanGlow: Story = {
  args: {
    children: "Cyan Glow",
  },
  render: (args) => (
    <button {...args} className="glow-cyan rounded-md bg-accent px-4 py-2 text-accent-foreground hover:bg-accent/90">
      {args.children}
    </button>
  ),
};

export const WithPulseGlow: Story = {
  args: {
    children: "Pulse Glow",
  },
  render: (args) => (
    <button {...args} className="glow-pulse rounded-md bg-primary px-4 py-2 text-primary-foreground">
      {args.children}
    </button>
  ),
};
