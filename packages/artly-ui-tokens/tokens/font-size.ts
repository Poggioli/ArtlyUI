import { baseValueFontSize } from "./base-values";

const fontSizeTokens = (): { [key: string]: string } => {
  const baseValue: number = baseValueFontSize;
  const unity: string = "px";
  const values: number[] = [2.5, 3, 3.5, 4, 4.5, 6, 8, 10, 12, 16];

  return values.reduce(
    (acc: { [key: string]: string }, curr: number, index: number) => {
      return {
        ...acc,
        [`${index + 1}`]: `${curr * baseValue}${unity}`,
      };
    },
    {}
  );
};

export default fontSizeTokens;

/**
 * 1 - 10px
 * 2 - 12px
 * 3 - 14px
 * 4 - 16px
 * 5 - 18px
 * 6 - 24px
 * 7 - 32px
 * 8 - 40px
 * 9 - 48px
 * 10 - 64px
 */
