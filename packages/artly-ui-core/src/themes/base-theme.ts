import {
  borderRadius,
  borderWidth,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  size,
  space,
  zIndex,
} from "@artly-ui/tokens";

const baseTheme = (colors: { [key: string]: string }) => ({
  colors: {
    ...colors,
  },
  space: {
    ...space(),
  },
  fontSizes: {
    ...fontSize(),
  },
  fonts: {
    ...fontFamily(),
  },
  fontWeights: {
    ...fontWeight(),
  },
  lineHeights: {
    ...lineHeight(),
  },
  letterSpacings: {
    ...letterSpacing(),
  },
  sizes: {
    ...size(),
  },
  borderWidths: {
    ...borderWidth(),
  },
  borderStyles: {},
  radii: {
    ...borderRadius(),
  },
  shadows: {},
  zIndices: {
    ...zIndex(),
  },
  transitions: {},
});

export { baseTheme };
