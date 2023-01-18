const zIndexTokens = (): { [key: string]: string } => {
  const values: string[] = [
    "100",
    "400",
    "510",
    "512",
    "513",
    "514",
    "515",
    "516",
    "517",
    "518",
    "519",
    "520",
  ];

  return values.reduce(
    (acc: { [key: string]: string }, curr: string, index: number) => {
      return {
        ...acc,
        [`${index + 1}`]: `${curr}`,
      };
    },
    {}
  );
};

export default zIndexTokens;

/**
 * 1 - 100
 * 2 - 400
 * 3 - 510
 * 4 - 512
 * 5 - 513
 * 6 - 514
 * 7 - 515
 * 8 - 516
 * 9 - 517
 * 10 - 518
 * 11 - 519
 * 12 - 520
 */
