import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const WithGrainEffect: Story = {
  render: () => (
    <Textarea className="grain w-full max-w-sm" placeholder="Grainy textarea..." />
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <Textarea className="glow-blue w-full max-w-sm" placeholder="Glowing textarea..." />
  ),
};
