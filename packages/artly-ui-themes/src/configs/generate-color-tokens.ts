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
import { generateGenericColors, GenericScale } from "./generate-generic-colors";

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
    isDarkTheme: colors.isDarkTheme,
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

    white: "#FFF",
    black: "#000",

    "background-app": "$gray-10",
    "background-subtle": "$gray-20",

    "text-high-contrast": "$gray-300",
    "text-low-contrast": "$gray-200",

    "button--basic--text-disabled": "$gray-80",
    "button--basic--unstyled--background-normal": "transparent",
    "button--basic--unstyled--background-hover": genericColorTokens.isDarkTheme
      ? "$white-20"
      : "$black-20",
    "button--basic--unstyled--background-focus": genericColorTokens.isDarkTheme
      ? "$white-30"
      : "$black-30",
    "button--basic--unstyled--background-disabled": "transparent",
    "button--basic--unstyled--text-normal": "$text-high-contrast",
    "button--basic--primary--background-normal": "transparent",
    "button--basic--primary--background-hover": "$primary-20",
    "button--basic--primary--background-focus": "$primary-30",
    "button--basic--primary--background-disabled": "transparent",
    "button--basic--primary--text-normal": "$primary-90",
    "button--basic--secondary--background-normal": "transparent",
    "button--basic--secondary--background-hover": "$secondary-20",
    "button--basic--secondary--background-focus": "$secondary-30",
    "button--basic--secondary--background-disabled": "transparent",
    "button--basic--secondary--text-normal": "$secondary-90",
    "button--basic--accent--background-normal": "transparent",
    "button--basic--accent--background-hover": "$accent-20",
    "button--basic--accent--background-focus": "$accent-30",
    "button--basic--accent--background-disabled": "transparent",
    "button--basic--accent--text-normal": "$accent-90",
    "button--basic--error--background-normal": "transparent",
    "button--basic--error--background-hover": "$error-20",
    "button--basic--error--background-focus": "$error-30",
    "button--basic--error--background-disabled": "transparent",
    "button--basic--error--text-normal": "$error-90",

    "button--flat--text-disabled": "$gray-90",
    "button--flat--unstyled--background-normal": genericColorTokens.isDarkTheme
      ? "$white-10"
      : "$black-10",
    "button--flat--unstyled--background-hover": genericColorTokens.isDarkTheme
      ? "$white-20"
      : "$black-20",
    "button--flat--unstyled--background-focus": genericColorTokens.isDarkTheme
      ? "$white-30"
      : "$black-30",
    "button--flat--unstyled--background-disabled": "$gray-30",
    "button--flat--unstyled--text-normal": "$text-high-contrast",
    "button--flat--primary--background-normal": "$primary-90",
    "button--flat--primary--background-hover": "$primary-100",
    "button--flat--primary--background-focus": "$primary-200",
    "button--flat--primary--background-disabled": "$gray-30",
    "button--flat--primary--text-normal": "$white-300",
    "button--flat--secondary--background-normal": "$secondary-90",
    "button--flat--secondary--background-hover": "$secondary-100",
    "button--flat--secondary--background-focus": "$secondary-200",
    "button--flat--secondary--background-disabled": "$gray-30",
    "button--flat--secondary--text-normal": "$white-300",
    "button--flat--accent--background-normal": "$accent-90",
    "button--flat--accent--background-hover": "$accent-100",
    "button--flat--accent--background-focus": "$accent-200",
    "button--flat--accent--background-disabled": "$gray-30",
    "button--flat--accent--text-normal": "$white-300",
    "button--flat--error--background-normal": "$error-90",
    "button--flat--error--background-hover": "$error-100",
    "button--flat--error--background-focus": "$error-200",
    "button--flat--error--background-disabled": "$gray-30",
    "button--flat--error--text-normal": "$white-300",

    "button--stroked--text-disabled": "$gray-80",
    "button--stroked--border-disabled": "$gray-80",
    "button--stroked--unstyled--background-normal": "transparent",
    "button--stroked--unstyled--background-focus":
      genericColorTokens.isDarkTheme ? "$white-20" : "$black-20",
    "button--stroked--unstyled--background-hover":
      genericColorTokens.isDarkTheme ? "$white-30" : "$black-30",
    "button--stroked--unstyled--background-disabled": "transparent",
    "button--stroked--unstyled--text-normal": "$text-high-contrast",
    "button--stroked--unstyled--border-normal": "$gray-70",
    "button--stroked--unstyled--border-hover": "$gray-80",
    "button--stroked--primary--background-normal": "transparent",
    "button--stroked--primary--background-hover": "$primary-20",
    "button--stroked--primary--background-focus": "$primary-30",
    "button--stroked--primary--background-disabled": "transparent",
    "button--stroked--primary--text-normal": "$primary-90",
    "button--stroked--primary--border-normal": "$primary-70",
    "button--stroked--primary--border-hover": "$primary-80",
    "button--stroked--secondary--background-normal": "transparent",
    "button--stroked--secondary--background-hover": "$secondary-20",
    "button--stroked--secondary--background-focus": "$secondary-30",
    "button--stroked--secondary--background-disabled": "transparent",
    "button--stroked--secondary--text-normal": "$secondary-90",
    "button--stroked--secondary--border-normal": "$secondary-70",
    "button--stroked--secondary--border-hover": "$secondary-80",
    "button--stroked--accent--background-normal": "transparent",
    "button--stroked--accent--background-hover": "$accent-20",
    "button--stroked--accent--background-focus": "$accent-30",
    "button--stroked--accent--background-disabled": "transparent",
    "button--stroked--accent--text-normal": "$accent-90",
    "button--stroked--accent--border-normal": "$accent-70",
    "button--stroked--accent--border-hover": "$accent-80",
    "button--stroked--error--background-normal": "transparent",
    "button--stroked--error--background-hover": "$error-20",
    "button--stroked--error--background-focus": "$error-30",
    "button--stroked--error--background-disabled": "transparent",
    "button--stroked--error--text-normal": "$error-90",
    "button--stroked--error--border-normal": "$error-70",
    "button--stroked--error--border-hover": "$error-80",

    "button--icon--text-disabled": "$gray-80",
    "button--icon--unstyled--background-normal": "transparent",
    "button--icon--unstyled--background-hover": genericColorTokens.isDarkTheme
      ? "$white-20"
      : "$black-20",
    "button--icon--unstyled--background-focus": genericColorTokens.isDarkTheme
      ? "$white-30"
      : "$black-30",
    "button--icon--unstyled--background-disabled": "transparent",
    "button--icon--unstyled--text-normal": "$text-high-contrast",
    "button--icon--primary--background-normal": "transparent",
    "button--icon--primary--background-hover": "$primary-20",
    "button--icon--primary--background-focus": "$primary-30",
    "button--icon--primary--background-disabled": "transparent",
    "button--icon--primary--text-normal": "$primary-90",
    "button--icon--secondary--background-normal": "transparent",
    "button--icon--secondary--background-hover": "$secondary-20",
    "button--icon--secondary--background-focus": "$secondary-30",
    "button--icon--secondary--background-disabled": "transparent",
    "button--icon--secondary--text-normal": "$secondary-90",
    "button--icon--accent--background-normal": "transparent",
    "button--icon--accent--background-hover": "$accent-20",
    "button--icon--accent--background-focus": "$accent-30",
    "button--icon--accent--background-disabled": "transparent",
    "button--icon--accent--text-normal": "$accent-90",
    "button--icon--error--background-normal": "transparent",
    "button--icon--error--background-hover": "$error-20",
    "button--icon--error--background-focus": "$error-30",
    "button--icon--error--background-disabled": "transparent",
    "button--icon--error--text-normal": "$error-90",

    "separator--background-gray": "$gray-60",
    "separator--background-colored": "$primary-60",

    "scroll-area--thumb--background": "$gray-90",
    "scroll-area--scroll-bar--background": "$gray-40",

    "progress-bar--background": "$gray-60",
    "progress-bar--indicator--primary--background": "$primary-90",
    "progress-bar--indicator--secondary--background": "$secondary-90",
    "progress-bar--indicator--accent--background": "$accent-90",
    "progress-bar--indicator--error--background": "$error-90",

    "avatar--primary--background": "$primary-30",
    "avatar--primary--text": "$primary-90",
    "avatar--secondary--background": "$secondary-30",
    "avatar--secondary--text": "$secondary-90",
    "avatar--accent--background": "$accent-30",
    "avatar--accent--text": "$accent-90",
    "avatar--standard--background": "$gray-30",
    "avatar--standard--text": "$gray-90",

    "tooltip--content--background": "$gray-300",
    "tooltip--content--text": "$gray-10",
    "tooltip--arrow-background": "$tooltip--content--background",

    "toast--background": genericColorTokens.isDarkTheme ? "$gray-30" : "$white",
    "dialog--background": genericColorTokens.isDarkTheme
      ? "$gray-30"
      : "$white",
  };
};
