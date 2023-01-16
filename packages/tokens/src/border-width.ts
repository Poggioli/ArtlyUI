import { baseValueBorderWidth } from "./base-value";

const borderWidthTokens = (): { [key: string]: string } => {
  const baseValue: number = baseValueBorderWidth;
  const unity: string = "px";
  const values: number[] = [0.25, 0.5, 1];

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

export default borderWidthTokens;

/**
 * 1 - 1px
 * 2 - 2px
 * 3 - 4px
 */
