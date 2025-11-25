import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@/components/ui/separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-muted-foreground">Content above separator</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-muted-foreground">Content below separator</p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[100px] items-center space-x-4">
      <div className="text-sm">Item 1</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 2</div>
      <Separator orientation="vertical" />
      <div className="text-sm">Item 3</div>
    </div>
  ),
};

export const WithGlowEffect: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Synthwave Section</h4>
        <p className="text-sm text-muted-foreground">Content above glowing separator</p>
      </div>
      <Separator className="bg-primary glow-blue" />
      <div>
        <h4 className="text-sm font-medium">Neon Section</h4>
        <p className="text-sm text-muted-foreground">Content below glowing separator</p>
      </div>
    </div>
  ),
};
