import { attr, css, FASTElement, html } from "@microsoft/fast-element";
import { buttonTokens } from "./design-tokens";

export class Button extends FASTElement {
  @attr({ mode: "reflect" })
  variant: "primary" | "secondary" = "primary";

  @attr
  size: "small" | "medium" | "large" = "small";
}

const styles = css`
  :host {
    display: inline-block;
  }

  button {
    border: none;
    border-radius: ${(x) => buttonTokens.borderRadius.getValueFor(x) + "px"};
    cursor: pointer;
    font-family: inherit;
  }

  /* 베리언트별 스타일 */
  button.primary {
    background: ${(x) =>
      buttonTokens.variants.primary.background.getValueFor(x)};
    color: ${(x) => buttonTokens.variants.primary.color.getValueFor(x)};
  }

  button.primary:hover {
    background: ${(x) =>
      buttonTokens.variants.primary.hoverBackground.getValueFor(x)};
  }

  button.secondary {
    background: ${(x) =>
      buttonTokens.variants.secondary.background.getValueFor(x)};
    color: ${(x) => buttonTokens.variants.secondary.color.getValueFor(x)};
  }

  button.secondary:hover {
    background: ${(x) =>
      buttonTokens.variants.secondary.hoverBackground.getValueFor(x)};
  }

  /* 크기별 스타일 */
  button.small {
    height: ${(x) => buttonTokens.sizes.small.height.getValueFor(x) + "px"};
    padding: ${(x) => buttonTokens.sizes.small.padding.getValueFor(x)};
    font-size: ${(x) => buttonTokens.sizes.small.fontSize.getValueFor(x)};
  }

  button.medium {
    height: ${(x) => buttonTokens.sizes.medium.height.getValueFor(x) + "px"};
    padding: ${(x) => buttonTokens.sizes.medium.padding.getValueFor(x)};
    font-size: ${(x) => buttonTokens.sizes.medium.fontSize.getValueFor(x)};
  }

  button.large {
    height: ${(x) => buttonTokens.sizes.large.height.getValueFor(x) + "px"};
    padding: ${(x) => buttonTokens.sizes.large.padding.getValueFor(x)};
    font-size: ${(x) => buttonTokens.sizes.large.fontSize.getValueFor(x)};
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
