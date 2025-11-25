import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area where you can place any content.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A simple card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithoutFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>No Footer Card</CardTitle>
        <CardDescription>This card has no footer section</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content without footer actions.</p>
      </CardContent>
    </Card>
  ),
};

export const WithGrainEffect: Story = {
  render: () => (
    <Card className="grain w-[350px]">
      <CardHeader>
        <CardTitle>Grainy Card</CardTitle>
        <CardDescription>Card with grain texture effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card features a subtle grainy texture overlay that adds depth and a retro aesthetic.</p>
      </CardContent>
    </Card>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <Card className="glow-blue w-[350px]">
      <CardHeader>
        <CardTitle>Neon Glow Card</CardTitle>
        <CardDescription>Card with electric blue glow</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card features an animated neon blue glow effect for that authentic synthwave vibe.</p>
      </CardContent>
    </Card>
  ),
};

export const WithGrainAndGlow: Story = {
  render: () => (
    <Card className="grain glow-cyan w-[350px]">
      <CardHeader>
        <CardTitle>Combined Effects</CardTitle>
        <CardDescription>Grain texture + cyan glow</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Combining grainy textures with neon glows creates the ultimate synthwave aesthetic.</p>
      </CardContent>
    </Card>
  ),
};
