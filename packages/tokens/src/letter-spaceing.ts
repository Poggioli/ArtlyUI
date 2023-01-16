const letterSpaceTokens = (): { [key: string]: string } => {
  const baseValue: number = 16;
  const unity: string = "px";
  const sizes: number[] = [-0.05, -0.025, 0, 0.025, 0.05, 0.1];

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

export default letterSpaceTokens;

/**
 * 1 - -0.8px
 * 2 - -0.4px
 * 3 - 0px
 * 4 - 0.4px
 * 5 - 0.8px
 * 6 - 1.6px
 */
