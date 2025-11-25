import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle } from "lucide-react";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const WithGrainEffect: Story = {
  render: () => (
    <Alert className="grain w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Synthwave Alert</AlertTitle>
      <AlertDescription>
        This alert features a grainy texture for that retro aesthetic.
      </AlertDescription>
    </Alert>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <Alert className="glow-blue w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Neon Alert</AlertTitle>
      <AlertDescription>
        This alert glows with electric blue for maximum synthwave vibes.
      </AlertDescription>
    </Alert>
  ),
};
