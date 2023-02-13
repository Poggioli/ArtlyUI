import {
  crimsonDark,
  grayDark,
  mauveDark,
  pinkDark,
  redDark,
  tealDark,
} from "@radix-ui/colors";
import { generateGenericColors } from "../configs";
import { generateColorTokens } from "../configs/generate-color-tokens";

export const PinkAndBlueGreyTheme = {
  ...generateColorTokens({
    primary: generateGenericColors(pinkDark, "primary"),
    secondary: generateGenericColors(tealDark, "secondary"),
    accent: generateGenericColors(crimsonDark, "accent"),
    error: generateGenericColors(redDark, "error"),
    gray: generateGenericColors(grayDark, "gray"),
    coloredGray: generateGenericColors(mauveDark, "colored-gray"),
    isDarkTheme: true,
  }),
  "badge--unstyled--text": "$gray-10",
  "badge--secondary--text": "$gray-10",
  "tag--filled--primary--text": "$gray-10",
  "tag--filled--secondary--text": "$gray-10",
  "tag--filled--accent--text": "$gray-10",
  "tag--filled--error--text": "$gray-10",
  "tag--outlined--primary--text": "$text-high-contrast",
  "toggle-group--primary--color": "$primary-300",
  "toggle-group--secondary--color": "$secondary-300",
  "toggle-group--accent--color": "$accent-300",
  "toggle-group--error--color": "$error-300",
};
