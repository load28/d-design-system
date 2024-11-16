import { DesignToken } from "@microsoft/fast-foundation";

// 기본 색상 정의
export const colors = {
  primary: "#0078d4",
  secondary: "#666666",
  white: "#FFFFFF",
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },
  gray: {
    50: "#F9FAFB",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280",
    600: "#4B5563",
  },
  hover: {
    primary: "#106EBE",
    secondary: "#E5E7EB",
  },
};

// 공통 사이즈 정의
export const sizes = {
  padding: {
    small: "0 12px",
    medium: "0 16px",
    large: "0 20px",
  },
  fontSize: {
    small: "12px",
    medium: "14px",
    large: "16px",
  },
  height: {
    small: 32,
    medium: 40,
    large: 48,
  },
};

export const buttonBorderRadius = DesignToken.create<number>(
  "button-border-radius"
).withDefault(4);

export const buttonVariants = {
  primary: {
    background: DesignToken.create<string>(
      "button-primary-background"
    ).withDefault(colors.primary),
    color: DesignToken.create<string>("button-primary-color").withDefault(
      colors.white
    ),
    hoverBackground: DesignToken.create<string>(
      "button-primary-hover"
    ).withDefault(colors.hover.primary),
  },
  secondary: {
    background: DesignToken.create<string>(
      "button-secondary-background"
    ).withDefault(colors.gray[100]),
    color: DesignToken.create<string>("button-secondary-color").withDefault(
      colors.gray[600]
    ),
    hoverBackground: DesignToken.create<string>(
      "button-secondary-hover"
    ).withDefault(colors.hover.secondary),
  },
};

export const buttonSizes = {
  small: {
    height: DesignToken.create<number>("button-height-small").withDefault(
      sizes.height.small
    ),
    padding: DesignToken.create<string>("button-padding-small").withDefault(
      sizes.padding.small
    ),
    fontSize: DesignToken.create<string>("button-font-size-small").withDefault(
      sizes.fontSize.small
    ),
  },
  medium: {
    height: DesignToken.create<number>("button-height-medium").withDefault(
      sizes.height.medium
    ),
    padding: DesignToken.create<string>("button-padding-medium").withDefault(
      sizes.padding.medium
    ),
    fontSize: DesignToken.create<string>("button-font-size-medium").withDefault(
      sizes.fontSize.medium
    ),
  },
  large: {
    height: DesignToken.create<number>("button-height-large").withDefault(
      sizes.height.large
    ),
    padding: DesignToken.create<string>("button-padding-large").withDefault(
      sizes.padding.large
    ),
    fontSize: DesignToken.create<string>("button-font-size-large").withDefault(
      sizes.fontSize.large
    ),
  },
};

export const inputTokens = {
  borderRadius: DesignToken.create<number>("input-border-radius").withDefault(
    4
  ),
  border: {
    color: DesignToken.create<string>("input-border-color").withDefault(
      colors.gray[300]
    ),
    focusColor: DesignToken.create<string>(
      "input-focus-border-color"
    ).withDefault(colors.primary),
    errorColor: DesignToken.create<string>(
      "input-error-border-color"
    ).withDefault(colors.red[600]),
  },
  sizes: {
    small: {
      height: DesignToken.create<number>("input-height-small").withDefault(
        sizes.height.small
      ),
      padding: DesignToken.create<string>("input-padding-small").withDefault(
        sizes.padding.small
      ),
      fontSize: DesignToken.create<string>("input-font-size-small").withDefault(
        sizes.fontSize.small
      ),
    },
    medium: {
      height: DesignToken.create<number>("input-height-medium").withDefault(
        sizes.height.medium
      ),
      padding: DesignToken.create<string>("input-padding-medium").withDefault(
        sizes.padding.medium
      ),
      fontSize: DesignToken.create<string>(
        "input-font-size-medium"
      ).withDefault(sizes.fontSize.medium),
    },
    large: {
      height: DesignToken.create<number>("input-height-large").withDefault(
        sizes.height.large
      ),
      padding: DesignToken.create<string>("input-padding-large").withDefault(
        sizes.padding.large
      ),
      fontSize: DesignToken.create<string>("input-font-size-large").withDefault(
        sizes.fontSize.large
      ),
    },
  },
  background: {
    default: DesignToken.create<string>("input-background").withDefault(
      colors.white
    ),
    disabled: DesignToken.create<string>(
      "input-disabled-background"
    ).withDefault(colors.gray[50]),
  },
  placeholder: {
    color: DesignToken.create<string>("placeholder-color").withDefault(
      colors.gray[500]
    ),
  },
};
