import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithGrainEffect: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="grain">Open Grainy Dialog</Button>
      </DialogTrigger>
      <DialogContent className="grain">
        <DialogHeader>
          <DialogTitle>Synthwave Dialog</DialogTitle>
          <DialogDescription>
            This dialog features a grainy texture overlay.
          </DialogDescription>
        </DialogHeader>
        <p>Dialog content with retro aesthetic.</p>
      </DialogContent>
    </Dialog>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="glow-blue">Open Glowing Dialog</Button>
      </DialogTrigger>
      <DialogContent className="glow-blue">
        <DialogHeader>
          <DialogTitle>Neon Dialog</DialogTitle>
          <DialogDescription>
            This dialog glows with electric blue synthwave energy.
          </DialogDescription>
        </DialogHeader>
        <p>Maximum synthwave vibes achieved.</p>
      </DialogContent>
    </Dialog>
  ),
};
