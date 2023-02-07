import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";

const StyledBadgeContainer: any = styled(Flex, {
  height: "fit-content",
  position: "relative",
  width: "fit-content",
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
      right: {
        right: 0,
      },
    },
    verticalPosition: {
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
    color: {
      primary: {
        $$backgroundColor: "$colors-badge--primary--background-color",
        $$textColor: "$colors-badge--primary--text",
      },
      secondary: {
        $$backgroundColor: "$colors-badge--secondary--background-color",
        $$textColor: "$colors-badge--secondary--text",
      },
      unstyled: {
        $$backgroundColor: "$colors-badge--unstyled--background-color",
        $$textColor: "$colors-badge--unstyled--text",
      },
      accent: {
        $$backgroundColor: "$colors-badge--accent--background-color",
        $$textColor: "$colors-badge--accent--text",
      },
      error: {
        $$backgroundColor: "$colors-badge--error--background-color",
        $$textColor: "$colors-badge--error--text",
      },
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
