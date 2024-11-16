import { DesignToken } from "@microsoft/fast-foundation";

// 기본 색상 정의
export const colors = {
  primary: "#0078d4",
  secondary: "#666666",
  white: "#FFFFFF",
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

// 나머지 버튼 사이즈 토큰들은 그대로 유지
export const buttonSizes = {
  small: {
    height: DesignToken.create<number>("button-height-small").withDefault(32),
    padding: DesignToken.create<string>("button-padding-small").withDefault(
      "0 12px"
    ),
    fontSize: DesignToken.create<string>("button-font-size-small").withDefault(
      "12px"
    ),
  },
  medium: {
    height: DesignToken.create<number>("button-height-medium").withDefault(40),
    padding: DesignToken.create<string>("button-padding-medium").withDefault(
      "0 16px"
    ),
    fontSize: DesignToken.create<string>("button-font-size-medium").withDefault(
      "14px"
    ),
  },
  large: {
    height: DesignToken.create<number>("button-height-large").withDefault(48),
    padding: DesignToken.create<string>("button-padding-large").withDefault(
      "0 20px"
    ),
    fontSize: DesignToken.create<string>("button-font-size-large").withDefault(
      "16px"
    ),
  },
};
