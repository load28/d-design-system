import { Button } from "@design-system/react/src/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    children: "Secondary Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "small",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Large Button",
  },
};
