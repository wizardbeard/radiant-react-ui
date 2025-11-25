import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Multiple sections can be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Try opening multiple sections to see it in action.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithGrainEffect: Story = {
  render: () => (
    <Accordion type="single" collapsible className="grain w-[400px] rounded-lg p-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Synthwave Feature 1</AccordionTrigger>
        <AccordionContent>
          This accordion has a grainy texture for that retro aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Synthwave Feature 2</AccordionTrigger>
        <AccordionContent>
          The grain effect adds depth and character.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithBlueGlow: Story = {
  render: () => (
    <Accordion type="single" collapsible className="glow-blue w-[400px] rounded-lg p-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Neon Section 1</AccordionTrigger>
        <AccordionContent>
          This accordion glows with electric blue energy.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Neon Section 2</AccordionTrigger>
        <AccordionContent>
          Perfect for synthwave interfaces.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
