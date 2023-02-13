import { generateColorTokens } from "../configs/generate-color-tokens";

export const DeepPurpleAndAmberTheme = {
  ...generateColorTokens({}),
  "button--flat--secondary--text-normal": "$black-300",
  "badge--secondary--text": "$text-high-contrast",
  "tag--filled--secondary--text": "$text-high-contrast",
  "tag--outlined--secondary--text": "$text-high-contrast",
  "tag--outlined--accent--text": "$text-high-contrast",
  "tag--outlined--error--text": "$text-high-contrast",
  "checkbox--secondary--indicator--color": "$text-high-contrast",
  "toggle-group--secondary--color": "$secondary-300",
};
