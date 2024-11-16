import { attr, css, FASTElement, html } from "@microsoft/fast-element";
import {
  buttonBorderRadius,
  buttonSizes,
  buttonVariants,
} from "../design-tokens";

export class Button extends FASTElement {
  @attr({ mode: "reflect" })
  variant: "primary" | "secondary" = "primary";

  @attr
  size: "small" | "medium" | "large" = "medium";
}

const styles = css`
  :host {
    display: inline-block;
  }

  button {
    border: none;
    border-radius: ${(x) => buttonBorderRadius.getValueFor(x) + "px"};
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s ease-in-out;
  }

  /* 베리언트별 스타일 */
  button.primary {
    background: ${(x) => buttonVariants.primary.background.getValueFor(x)};
    color: ${(x) => buttonVariants.primary.color.getValueFor(x)};
  }

  button.primary:hover {
    background: ${(x) => buttonVariants.primary.hoverBackground.getValueFor(x)};
  }

  button.secondary {
    background: ${(x) => buttonVariants.secondary.background.getValueFor(x)};
    color: ${(x) => buttonVariants.secondary.color.getValueFor(x)};
  }

  button.secondary:hover {
    background: ${(x) =>
      buttonVariants.secondary.hoverBackground.getValueFor(x)};
  }

  /* 크기별 스타일 */
  button.small {
    height: ${(x) => buttonSizes.small.height.getValueFor(x) + "px"};
    padding: ${(x) => buttonSizes.small.padding.getValueFor(x)};
    font-size: ${(x) => buttonSizes.small.fontSize.getValueFor(x)};
  }

  button.medium {
    height: ${(x) => buttonSizes.medium.height.getValueFor(x) + "px"};
    padding: ${(x) => buttonSizes.medium.padding.getValueFor(x)};
    font-size: ${(x) => buttonSizes.medium.fontSize.getValueFor(x)};
  }

  button.large {
    height: ${(x) => buttonSizes.large.height.getValueFor(x) + "px"};
    padding: ${(x) => buttonSizes.large.padding.getValueFor(x)};
    font-size: ${(x) => buttonSizes.large.fontSize.getValueFor(x)};
  }
`;

const template = html<Button>`
  <button class="${(x) => `${x.variant} ${x.size}`}">
    <slot></slot>
  </button>
`;

Button.define({
  name: "ds-button",
  template,
  styles,
});
