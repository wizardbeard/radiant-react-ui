import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <Label>Volume</Label>
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: "w-[300px]",
  },
};

export const WithGrainEffect: Story = {
  render: () => (
    <div className="grain rounded-lg p-6 w-[350px]">
      <Label className="mb-4 block">Grainy Slider</Label>
      <Slider defaultValue={[60]} max={100} step={1} />
    </div>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <div className="glow-blue rounded-lg p-6 w-[350px]">
      <Label className="mb-4 block">Glowing Slider</Label>
      <Slider defaultValue={[75]} max={100} step={1} />
    </div>
  ),
};
