import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
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

export const WithBlueGlow: Story = {
  args: {
    children: "Glowing",
  },
  render: (args) => (
    <span className="glow-blue inline-flex items-center rounded-md bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
      {args.children}
    </span>
  ),
};

export const WithPinkGlow: Story = {
  args: {
    children: "Alert",
  },
  render: (args) => (
    <span className="glow-pink inline-flex items-center rounded-md bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground">
      {args.children}
    </span>
  ),
};

export const WithGrain: Story = {
  args: {
    children: "Textured",
  },
  render: (args) => (
    <span className="grain inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
      {args.children}
    </span>
  ),
};
