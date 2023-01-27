import { crimsonDark, grayDark, mauveDark, pinkDark, redDark, tealDark } from "@radix-ui/colors";
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
  }),
};
