import { styled } from "@artly-ui/core";
import {
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
} from "@artly-ui/tokens";

const StyledHeading = styled("h1", {
  m: 0,
  p: 0,

  variants: {
    level: {
      1: {
        ...heading1,
      },
      2: {
        ...heading2,
      },
      3: {
        ...heading3,
      },
      4: {
        ...heading4,
      },
      5: {
        ...heading5,
      },
      6: {
        ...heading6,
      },
    },
  },

  defaultVariants: {
    level: "1",
  },
});

export { StyledHeading };
