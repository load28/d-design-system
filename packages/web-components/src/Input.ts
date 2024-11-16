import { attr, css, FASTElement, html } from "@microsoft/fast-element";
import { inputTokens } from "./design-tokens";

export type InputSize = "small" | "medium" | "large";
export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url";

const styles = css`
  :host {
    display: block;
  }

  :host(.input-wrapper) {
    display: inline-block;
  }

  .input-container {
    display: inline-block;
    position: relative;
  }

  input {
    border-radius: ${(x) => inputTokens.borderRadius.getValueFor(x) + "px"};
    border: 1px solid ${(x) => inputTokens.border.color.getValueFor(x)};
    background: ${(x) => inputTokens.background.default.getValueFor(x)};
    font-family: inherit;
    transition: all 0.2s ease-in-out;
    width: 100%;
    box-sizing: border-box;
  }

  /* 사이즈별 스타일 */
  input.small {
    height: ${(x) => inputTokens.sizes.small.height.getValueFor(x) + "px"};
    padding: ${(x) => inputTokens.sizes.small.padding.getValueFor(x)};
    font-size: ${(x) => inputTokens.sizes.small.fontSize.getValueFor(x)};
  }

  input.medium {
    height: ${(x) => inputTokens.sizes.medium.height.getValueFor(x) + "px"};
    padding: ${(x) => inputTokens.sizes.medium.padding.getValueFor(x)};
    font-size: ${(x) => inputTokens.sizes.medium.fontSize.getValueFor(x)};
  }

  input.large {
    height: ${(x) => inputTokens.sizes.large.height.getValueFor(x) + "px"};
    padding: ${(x) => inputTokens.sizes.large.padding.getValueFor(x)};
    font-size: ${(x) => inputTokens.sizes.large.fontSize.getValueFor(x)};
  }

  input:focus {
    outline: none;
    border-color: ${(x) => inputTokens.border.focusColor.getValueFor(x)};
    box-shadow: 0 0 0 2px
      ${(x) => inputTokens.border.focusColor.getValueFor(x)}33;
  }

  input:disabled {
    background: ${(x) => inputTokens.background.disabled.getValueFor(x)};
    cursor: not-allowed;
    color: ${(x) => inputTokens.border.color.getValueFor(x)};
  }

  input::placeholder {
    color: ${(x) => inputTokens.placeholder.color.getValueFor(x)};
  }

  input[data-error="true"] {
    border-color: ${(x) => inputTokens.border.errorColor.getValueFor(x)};
  }

  input[data-error="true"]:focus {
    border-color: ${(x) => inputTokens.border.errorColor.getValueFor(x)};
    box-shadow: 0 0 0 2px
      ${(x) => inputTokens.border.errorColor.getValueFor(x)}33;
  }
`;

const template = html<Input>`
  <div class="input-container">
    ${(x) => x.touched}
    <input
      class="${(x) => x.size}"
      type="${(x) => x.type}"
      value="${(x) => x.value}"
      placeholder="${(x) => x.placeholder}"
      ?disabled="${(x) => x.disabled}"
      ?required="${(x) => x.required}"
      @input="${(x, c) => x.handleInput(c.event)}"
      @blur="${(x) => x.handleBlur()}"
      data-error="${(x) => {
        if (!x.getTouched()) {
          return false;
        }
        const input = x.shadowRoot?.querySelector("input");
        const value = input?.value || "";
        return x.required ? !x.isValid && value.length === 0 : false;
      }}"
      data-validity="${(x) => {
        if (!x.getTouched()) {
          return JSON.stringify({
            valid: true,
            valueMissing: false,
          });
        }
        const input = x.querySelector("input");
        const value = input?.value || "";
        const isValid = value.length > 0;

        return JSON.stringify({
          valid: isValid,
          valueMissing: !isValid,
        });
      }}"
      minlength="${(x) => (x.required ? 1 : 0)}"
    />
  </div>
`;

export class Input extends FASTElement {
  @attr type: InputType = "text";
  @attr value: string = "";
  @attr placeholder: string = "";
  @attr({ mode: "boolean" }) disabled: boolean = false;
  @attr({ mode: "boolean" }) required: boolean = false;
  @attr size: InputSize = "medium";
  @attr touched: boolean = false;
  @attr isValid: boolean = true;

  private validate(): void {
    const input = this.querySelector("input");
    const value = input?.value || "";
    this.isValid = value.length > 0;
  }

  public handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 0) {
      this.touched = true;
    }
    this.value = input.value;
    this.$emit("change", this.value);
  }

  public handleBlur(): void {
    this.touched = true;
    this.validate();
  }

  public getTouched(): boolean {
    return this.touched;
  }
}

Input.define({ name: "ds-input", template, styles });
