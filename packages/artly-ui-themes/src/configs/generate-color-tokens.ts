import {
  amber,
  blackA,
  grass,
  gray,
  mauve,
  purple,
  red,
  whiteA,
} from "@radix-ui/colors";
import { GenericScale, generateGenericColors } from "./generate-generic-colors";

type GenerateColors = {
  primary?: GenericScale;
  secondary?: GenericScale;
  accent?: GenericScale;
  error?: GenericScale;
  gray?: GenericScale;
  coloredGray?: GenericScale;
  white?: GenericScale;
  black?: GenericScale;
  isDarkTheme?: boolean;
};

export const generateColorTokens = (
  colors: GenerateColors
): { [key: string]: string } => {
  const genericColorTokens: GenerateColors = {
    primary: colors.primary ?? generateGenericColors(purple, "primary"),
    secondary: colors.secondary ?? generateGenericColors(amber, "secondary"),
    accent: colors.accent ?? generateGenericColors(grass, "accent"),
    error: colors.error ?? generateGenericColors(red, "error"),
    gray: colors.gray ?? generateGenericColors(gray, "gray"),
    coloredGray:
      colors.coloredGray ?? generateGenericColors(mauve, "colored-gray"),
    white: colors.white ?? generateGenericColors(whiteA, "white"),
    black: colors.black ?? generateGenericColors(blackA, "black"),
    isDarkTheme: false,
  };

  return {
    ...genericColorTokens.primary,
    ...genericColorTokens.secondary,
    ...genericColorTokens.accent,
    ...genericColorTokens.error,
    ...genericColorTokens.gray,
    ...genericColorTokens.coloredGray,
    ...genericColorTokens.white,
    ...genericColorTokens.black,
  };
};
