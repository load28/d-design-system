import { Input } from "@design-system/react/src/Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "주석",
    value: "",
    disabled: false,
    required: false,
    size: "medium",
    type: "text"
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "비활성화된 입력창",
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: "필수 입력 항목",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "작은 입력창",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    placeholder: "중간 입력창",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "큰 입력창",
  },
};
