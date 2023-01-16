import { baseValueBorderRadius } from "./base-value";

const borderRadiusTokens = (): { [key: string]: string } => {
  const baseValue: number = baseValueBorderRadius;
  const unity: string = "px";
  const values: number[] = [1, 2, 4, 100];

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

export default borderRadiusTokens;

/**
 * 1 - 4px
 * 2 - 8px
 * 3 - 16px
 * 4 - 400px
 */
