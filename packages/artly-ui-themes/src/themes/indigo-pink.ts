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
};
