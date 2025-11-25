import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fruit">Fruit</Label>
      <Select>
        <SelectTrigger id="fruit" className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithGrainEffect: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="grain w-[180px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent className="grain">
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="glow-blue w-[180px]">
        <SelectValue placeholder="Glowing select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="neon1">Neon 1</SelectItem>
        <SelectItem value="neon2">Neon 2</SelectItem>
        <SelectItem value="neon3">Neon 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};
