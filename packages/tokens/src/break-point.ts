const breakPointTokens = (): { [key: string]: string } => {
  return {
    initial: "(min-width: 0px)",
    small: "(min-width: 576px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 992px)",
    extraLarge: "(min-width: 1200px)",
  };
};

export default breakPointTokens;
