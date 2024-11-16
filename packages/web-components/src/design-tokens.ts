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
    700: "#374151",
    800: "#1F2937",
    900: "#111827",
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

// 공통 디자인 토큰
export const commonTokens = {
  borderRadius: DesignToken.create<number>("border-radius").withDefault(4),
  colors: {
    background: DesignToken.create<string>("background").withDefault(
      colors.white
    ),
    disabledBackground: DesignToken.create<string>(
      "disabled-background"
    ).withDefault(colors.gray[50]),
    primary: DesignToken.create<string>("primary-color").withDefault(
      colors.primary
    ),
    secondary: DesignToken.create<string>("secondary-color").withDefault(
      colors.gray[100]
    ),
    border: DesignToken.create<string>("border-color").withDefault(
      colors.gray[300]
    ),
    error: DesignToken.create<string>("error-color").withDefault(
      colors.red[600]
    ),
    text: {
      primary: DesignToken.create<string>("text-primary").withDefault(
        colors.white
      ),
      secondary: DesignToken.create<string>("text-secondary").withDefault(
        colors.gray[600]
      ),
      placeholder: DesignToken.create<string>("text-placeholder").withDefault(
        colors.gray[500]
      ),
    },
    hover: {
      primary: DesignToken.create<string>("hover-primary").withDefault(
        colors.hover.primary
      ),
      secondary: DesignToken.create<string>("hover-secondary").withDefault(
        colors.hover.secondary
      ),
    },
  },
  sizing: {
    small: {
      height: DesignToken.create<number>("height-small").withDefault(
        sizes.height.small
      ),
      padding: DesignToken.create<string>("padding-small").withDefault(
        sizes.padding.small
      ),
      fontSize: DesignToken.create<string>("font-size-small").withDefault(
        sizes.fontSize.small
      ),
    },
    medium: {
      height: DesignToken.create<number>("height-medium").withDefault(
        sizes.height.medium
      ),
      padding: DesignToken.create<string>("padding-medium").withDefault(
        sizes.padding.medium
      ),
      fontSize: DesignToken.create<string>("font-size-medium").withDefault(
        sizes.fontSize.medium
      ),
    },
    large: {
      height: DesignToken.create<number>("height-large").withDefault(
        sizes.height.large
      ),
      padding: DesignToken.create<string>("padding-large").withDefault(
        sizes.padding.large
      ),
      fontSize: DesignToken.create<string>("font-size-large").withDefault(
        sizes.fontSize.large
      ),
    },
  },
};

// 컴포넌트별 토큰은 공통 토큰을 참조
export const buttonTokens = {
  borderRadius: commonTokens.borderRadius,
  variants: {
    primary: {
      background: commonTokens.colors.primary,
      color: commonTokens.colors.text.primary,
      hoverBackground: commonTokens.colors.hover.primary,
    },
    secondary: {
      background: commonTokens.colors.secondary,
      color: commonTokens.colors.text.secondary,
      hoverBackground: commonTokens.colors.hover.secondary,
    },
  },
  sizes: commonTokens.sizing,
};

export const inputTokens = {
  borderRadius: commonTokens.borderRadius,
  border: {
    color: commonTokens.colors.border,
    focusColor: commonTokens.colors.primary,
    errorColor: commonTokens.colors.error,
  },
  sizes: commonTokens.sizing,
  background: {
    default: commonTokens.colors.background,
    disabled: commonTokens.colors.disabledBackground,
  },
  placeholder: {
    color: commonTokens.colors.text.placeholder,
  },
};
