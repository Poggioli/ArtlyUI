import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";

const StyledCard = styled(Flex, {
  backgroundColor: "$card--background-color",
  borderRadius: "$2",
  boxSizing: "border-box",

  variants: {
    shaded: {
      true: {
        $$boxShadow: "$colors-black-30 0 $sizes-2 $sizes-3 0",
        boxShadow: "$$boxShadow",
      },
    },
    bordered: {
      true: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "$card--border-color",
      },
    },
  },

  defaultVariants: {
    shaded: true,
    bordered: true,
  },
});

export { StyledCard };
