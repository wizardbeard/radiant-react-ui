import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Dropdown Menu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithGrainEffect: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="grain" variant="outline">Grainy Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grain">
        <DropdownMenuLabel>Synthwave Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Option 1</DropdownMenuItem>
        <DropdownMenuItem>Option 2</DropdownMenuItem>
        <DropdownMenuItem>Option 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="glow-blue">Glowing Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="glow-blue">
        <DropdownMenuLabel>Neon Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Neon 1</DropdownMenuItem>
        <DropdownMenuItem>Neon 2</DropdownMenuItem>
        <DropdownMenuItem>Neon 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
