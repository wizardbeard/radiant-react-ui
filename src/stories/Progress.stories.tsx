import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: "w-[300px]",
  },
};

export const HalfProgress: Story = {
  args: {
    value: 50,
    className: "w-[300px]",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[300px]",
  },
};

export const WithGrainEffect: Story = {
  render: () => (
    <div className="grain rounded-lg p-6 w-[350px]">
      <Progress value={66} />
    </div>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <div className="glow-blue rounded-lg p-6 w-[350px]">
      <Progress value={75} />
    </div>
  ),
};
