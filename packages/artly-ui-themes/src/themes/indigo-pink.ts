import { gray, indigo, orange, pink, red, slate } from "@radix-ui/colors";
import { generateGenericColors } from "../configs";
import { generateColorTokens } from "../configs/generate-color-tokens";

export const IndigoPinkTheme = {
  ...generateColorTokens({
    primary: generateGenericColors(indigo, "primary"),
    secondary: generateGenericColors(pink, "secondary"),
    accent: generateGenericColors(orange, "accent"),
    error: generateGenericColors(red, "error"),
    gray: generateGenericColors(gray, "gray"),
    coloredGray: generateGenericColors(slate, "colored-gray"),
  }),
  "tag--filled--accent--text": "$text-high-contrast",
  "tag--outlined--accent--text": "$text-high-contrast",
  "tag--outlined--error--text": "$text-high-contrast",
  "toggle-group--accent--color": "$accent-300",
  "select--accent--text-color-focus": "$primary-300",
  "input--accent--label--color-focus": "$gray-300",
};
