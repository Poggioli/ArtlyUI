import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";

const StyledBadgeContainer: any = styled(Flex, {
  position: "relative",
});

const StyledBadge: any = styled(Flex, {
  height: "$5",
  minWidth: "$5",
  position: "absolute",
  backgroundColor: "$$backgroundColor",

  "&, *": {
    textColor: "$$textColor",
  },

  variants: {
    horizontalPosition: {
      left: {
        left: 0,
      },
      center: {},
      right: {
        right: 0,
      },
    },
    verticalPosition: {
      top: {
        top: 0,
      },
      center: {},
      bottom: {
        bottom: 0,
      },
    },
    color: {
      primary: {},
      secondary: {},
      unstyled: {},
      accent: {},
      error: {},
    },
    dot: {
      true: {
        height: "$3",
        minWidth: "initial",
        width: "$3",
      },
    },
  },

  defaultVariants: {
    horizontalPosition: "right",
    verticalPosition: "top",
    color: "primary",
    dot: false,
  },
});

export { StyledBadge, StyledBadgeContainer };
