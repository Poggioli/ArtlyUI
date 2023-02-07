import { generateColorTokens } from "../configs/generate-color-tokens";

export const DeepPurpleAndAmberTheme = {
  ...generateColorTokens({}),
  "button--flat--secondary--text-normal": "$black-300",
  "badge--secondary--text": "$text-high-contrast",
};
