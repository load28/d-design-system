import { Input as WebInput } from "@design-system/web-components/src/input";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

// FAST 컴포넌트를 React로 랩핑
const wrap = provideReactWrapper(React).wrap;
const WrappedInput = wrap(WebInput, { name: "ds-input" });

export type InputSize = "small" | "medium" | "large";
export type InputType =
  | "text"
  | "password"
  | "email"
  | "tel"
  | "url"
  | "number"
  | "search";

export interface InputProps {
  type?: InputType;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  size?: InputSize;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  required,
  value,
  ...props
}) => {
  const [hasError, setHasError] = React.useState(false);

  const handleChange = (event: Event) => {
    const customEvent = event as CustomEvent;
    onChange?.(customEvent.detail);
    setHasError(required && !customEvent.detail);
  };

  const handleBlur = () => {
    setHasError(required && !value);
  };

  return (
    <WrappedInput
      {...props}
      value={value}
      required={required}
      onchange={handleChange}
      onblur={handleBlur}
      data-error={hasError}
    />
  );
};
