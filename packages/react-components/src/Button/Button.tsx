import { Button as WebButton } from "@design-system/web-components/src/button/button";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

// FAST 컴포넌트를 React로 랩핑
const wrap = provideReactWrapper(React).wrap;
const WrappedButton = wrap(WebButton, { name: "ds-button" });

export interface ButtonProps {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <WrappedButton {...props} />;
};
