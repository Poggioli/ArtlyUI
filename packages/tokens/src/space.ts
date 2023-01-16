import { baseValueSpace } from "./base-value";

const spaceTokens = (): { [key: string]: string } => {
  const baseValue: number = baseValueSpace;
  const unity: string = "px";
  const sizes: number[] = [0.5, 1, 2, 4, 5, 6, 8, 10, 12, 16, 18, 24, 32];

  return sizes.reduce(
    (acc: { [key: string]: string }, curr: number, index: number) => {
      return {
        ...acc,
        [`${index + 1}`]: `${curr * baseValue}${unity}`,
      };
    },
    {}
  );
};

export default spaceTokens;

/**
 * 1 - 2px
 * 2 - 4px
 * 3 - 8px
 * 4 - 16px
 * 5 - 20px
 * 6 - 24px
 * 7 - 32px
 * 8 - 40px
 * 9 - 48px
 * 10 - 64px
 * 11 - 72px
 * 12 - 96px
 * 13 - 128px
 */
