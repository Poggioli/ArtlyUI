import { styled } from "@artly-ui/core";
import * as SeparatorPrimitives from "@radix-ui/react-separator";

const StyledSeparator = styled(SeparatorPrimitives.Root, {
  backgroundColor: "$separator--background-gray",

  "&[data-orientation=horizontal]": {
    height: 1,
    width: "100%",
  },

  "&[data-orientation=vertical]": {
    height: "100%",
    width: 1,
  },

  variants: {
    colored: {
      true: {
        backgroundColor: "$separator--background-colored",
      },
    },
  },

  defaultVariants: {
    colored: false,
  },
});

export { StyledSeparator };
