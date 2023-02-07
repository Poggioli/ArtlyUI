import {
  amber,
  blackA,
  grass,
  gray,
  mauve,
  purple,
  red,
  whiteA
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
    "popover--background": genericColorTokens.isDarkTheme
      ? "$gray-30"
      : "$white",
    "alert-dialog--background": genericColorTokens.isDarkTheme
      ? "$gray-30"
      : "$white",

    "accordion--border-color": "$gray-50",
    "accordion--item--border-color": "$gray-50",
    "accordion--trigger--background-color--normal": "$gray-10",
    "accordion--trigger--background-color--hover": "$gray-20",
    "accordion--trigger--background-color--focus": "$gray-30",
    "accordion--item-trigger--border-color": "$gray-50",
    "accordion--content--background-color": "$gray-10",

    "hover-card--background": genericColorTokens.isDarkTheme
      ? "$gray-30"
      : "$white",
    "hover-card--arrow--background": "$hover-card--background",

    "slider--track--primary--background-color--normal": "$gray-70",
    "slider--track--primary--background-color--disabled": "$gray-40",
    "slider--range--primary--background-color--normal": "$primary-80",
    "slider--range--primary--background-color--hover": "$primary-90",
    "slider--range--primary--background-color--focus": "$primary-100",
    "slider--range--primary--background-color--disabled": "$gray-70",
    "slider--thumb--primary--background-color--normal": "$primary-90",
    "slider--thumb--primary--background-color--hover": "$primary-100",
    "slider--thumb--primary--background-color--focus": "$primary-200",
    "slider--thumb--primary--background-color--disabled": "$gray-80",

    "slider--track--secondary--background-color--normal": "$gray-70",
    "slider--track--secondary--background-color--disabled": "$gray-40",
    "slider--range--secondary--background-color--normal": "$secondary-80",
    "slider--range--secondary--background-color--hover": "$secondary-90",
    "slider--range--secondary--background-color--focus": "$secondary-100",
    "slider--range--secondary--background-color--disabled": "$gray-70",
    "slider--thumb--secondary--background-color--normal": "$secondary-90",
    "slider--thumb--secondary--background-color--hover": "$secondary-100",
    "slider--thumb--secondary--background-color--focus": "$secondary-200",
    "slider--thumb--secondary--background-color--disabled": "$gray-80",

    "slider--track--unstyled--background-color--normal": "$gray-70",
    "slider--track--unstyled--background-color--disabled": "$gray-40",
    "slider--range--unstyled--background-color--normal": "$gray-90",
    "slider--range--unstyled--background-color--hover": "$gray-100",
    "slider--range--unstyled--background-color--focus": "$gray-200",
    "slider--range--unstyled--background-color--disabled": "$gray-70",
    "slider--thumb--unstyled--background-color--normal": "$gray-100",
    "slider--thumb--unstyled--background-color--hover": "$gray-200",
    "slider--thumb--unstyled--background-color--focus": "$gray-300",
    "slider--thumb--unstyled--background-color--disabled": "$gray-80",

    "slider--track--accent--background-color--normal": "$gray-70",
    "slider--track--accent--background-color--disabled": "$gray-40",
    "slider--range--accent--background-color--normal": "$accent-80",
    "slider--range--accent--background-color--hover": "$accent-90",
    "slider--range--accent--background-color--focus": "$accent-100",
    "slider--range--accent--background-color--disabled": "$gray-70",
    "slider--thumb--accent--background-color--normal": "$accent-90",
    "slider--thumb--accent--background-color--hover": "$accent-100",
    "slider--thumb--accent--background-color--focus": "$accent-200",
    "slider--thumb--accent--background-color--disabled": "$gray-80",

    "slider--track--error--background-color--normal": "$gray-70",
    "slider--track--error--background-color--disabled": "$gray-40",
    "slider--range--error--background-color--normal": "$error-80",
    "slider--range--error--background-color--hover": "$error-90",
    "slider--range--error--background-color--focus": "$error-100",
    "slider--range--error--background-color--disabled": "$gray-70",
    "slider--thumb--error--background-color--normal": "$error-90",
    "slider--thumb--error--background-color--hover": "$error-100",
    "slider--thumb--error--background-color--focus": "$error-200",
    "slider--thumb--error--background-color--disabled": "$gray-80",

    "switch--primary--outline-color": "$primary-70",
    "switch--root--primary--background-color--unchecked": "$gray-70",
    "switch--root--primary--background-color--checked": "$primary-50",
    "switch--root--primary--background-color--disabled-unchecked": "$gray-50",
    "switch--root--primary--background-color--disabled-checked": "$primary-30",
    "switch--thumb--primary--background-color--normal": "$white-300",
    "switch--thumb--primary--background-color--hover-unchecked": "$white-200",
    "switch--thumb--primary--background-color--hover-checked": "$primary-200",
    "switch--thumb--primary--background-color--focus-unchecked": "$white-200",
    "switch--thumb--primary--background-color--focus-checked": "$primary-200",
    "switch--thumb--primary--background-color--checked": "$primary-90",
    "switch--thumb--primary--background-color--disabled-checked": "$primary-50",
    "switch--thumb--primary--background-color--disabled-unchecked":
      "$white-200",

    "switch--secondary--outline-color": "$secondary-70",
    "switch--root--secondary--background-color--unchecked": "$gray-70",
    "switch--root--secondary--background-color--checked": "$secondary-50",
    "switch--root--secondary--background-color--disabled-unchecked": "$gray-50",
    "switch--root--secondary--background-color--disabled-checked":
      "$secondary-30",
    "switch--thumb--secondary--background-color--normal": "$white-300",
    "switch--thumb--secondary--background-color--hover-unchecked": "$white-200",
    "switch--thumb--secondary--background-color--hover-checked":
      "$secondary-200",
    "switch--thumb--secondary--background-color--focus-unchecked": "$white-200",
    "switch--thumb--secondary--background-color--focus-checked":
      "$secondary-200",
    "switch--thumb--secondary--background-color--checked": "$secondary-90",
    "switch--thumb--secondary--background-color--disabled-checked":
      "$secondary-50",
    "switch--thumb--secondary--background-color--disabled-unchecked":
      "$white-200",

    "switch--accent--outline-color": "$accent-70",
    "switch--root--accent--background-color--unchecked": "$gray-70",
    "switch--root--accent--background-color--checked": "$accent-50",
    "switch--root--accent--background-color--disabled-unchecked": "$gray-50",
    "switch--root--accent--background-color--disabled-checked": "$accent-30",
    "switch--thumb--accent--background-color--normal": "$white-300",
    "switch--thumb--accent--background-color--hover-unchecked": "$white-200",
    "switch--thumb--accent--background-color--hover-checked": "$accent-200",
    "switch--thumb--accent--background-color--focus-unchecked": "$white-200",
    "switch--thumb--accent--background-color--focus-checked": "$accent-200",
    "switch--thumb--accent--background-color--checked": "$accent-90",
    "switch--thumb--accent--background-color--disabled-checked": "$accent-50",
    "switch--thumb--accent--background-color--disabled-unchecked": "$white-200",

    "switch--error--outline-color": "$error-70",
    "switch--root--error--background-color--unchecked": "$gray-70",
    "switch--root--error--background-color--checked": "$error-50",
    "switch--root--error--background-color--disabled-unchecked": "$gray-50",
    "switch--root--error--background-color--disabled-checked": "$error-30",
    "switch--thumb--error--background-color--normal": "$white-300",
    "switch--thumb--error--background-color--hover-unchecked": "$white-200",
    "switch--thumb--error--background-color--hover-checked": "$error-200",
    "switch--thumb--error--background-color--focus-unchecked": "$white-200",
    "switch--thumb--error--background-color--focus-checked": "$error-200",
    "switch--thumb--error--background-color--checked": "$error-90",
    "switch--thumb--error--background-color--disabled-checked": "$error-50",
    "switch--thumb--error--background-color--disabled-unchecked": "$white-200",

    "switch--unstyled--outline-color": "$gray-70",
    "switch--root--unstyled--background-color--unchecked": "$gray-70",
    "switch--root--unstyled--background-color--checked":
      genericColorTokens.isDarkTheme ? "$white-50" : "$black-50",
    "switch--root--unstyled--background-color--disabled-unchecked": "$gray-50",
    "switch--root--unstyled--background-color--disabled-checked":
      genericColorTokens.isDarkTheme ? "$white-30" : "$black-30",
    "switch--thumb--unstyled--background-color--normal": "$white-300",
    "switch--thumb--unstyled--background-color--hover-unchecked": "$white-200",
    "switch--thumb--unstyled--background-color--hover-checked":
      genericColorTokens.isDarkTheme ? "$white-200" : "$black-200",
    "switch--thumb--unstyled--background-color--focus-unchecked": "$white-200",
    "switch--thumb--unstyled--background-color--focus-checked":
      genericColorTokens.isDarkTheme ? "$white-200" : "$black-200",
    "switch--thumb--unstyled--background-color--checked":
      genericColorTokens.isDarkTheme ? "$white-90" : "$black-90",
    "switch--thumb--unstyled--background-color--disabled-checked":
      genericColorTokens.isDarkTheme ? "$white-50" : "$black-50",
    "switch--thumb--unstyled--background-color--disabled-unchecked":
      "$white-200",

      "badge--primary--background-color": "$primary-90",
      "badge--secondary--background-color": "$secondary-90",
      "badge--unstyled--background-color": "$gray-90",
      "badge--accent--background-color": "$accent-90",
      "badge--error--background-color": "$error-90",
      
      "badge--primary--text": "$white-300",
      "badge--secondary--text": "$white-300",
      "badge--unstyled--text": "$text-high-contrast",
      "badge--accent--text": "$white-300",
      "badge--error--text": "$white-300",
  };
};
