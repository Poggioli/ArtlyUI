const mediaTokens = (): { [key: string]: string } => {
  return {
    small: "(min-width: 576px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 992px)",
    extraLarge: "(min-width: 1200px)",
  };
};

export default mediaTokens;
