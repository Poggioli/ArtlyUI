import { styled } from "@artly-ui/core";
import * as ProgressPrimitives from "@radix-ui/react-progress";

const StyledProgressRoot = styled(ProgressPrimitives.Root, {
  backgroundColor: "$progress-bar--background",
  overflow: "hidden",
  position: "relative",
  transform: "translateZ(0)",
  width: "100%",

  variants: {
    shape: {
      flat: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: "$1",
      },
      soft: {
        borderRadius: "$4",
      },
    },
    size: {
      small: {
        height: "$3",
      },
      medium: {
        height: "$4",
      },
      large: {
        height: "$5",
      },
    },
  },

  defaultVariants: {
    shape: "soft",
    size: "medium",
  },
});

const StyledProgressIndicator = styled(ProgressPrimitives.Indicator, {
  $$boxShadow: "-20px 0 38px 10px $colors-black-300",
  boxShadow: "$$boxShadow",
  height: "100%",
  transition: "transform 660ms cubic-bezier(0.65, 0, 0.35, 1)",
  width: "100%",

  variants: {
    color: {
      primary: {
        backgroundColor: "$progress-bar--indicator--primary--background",
      },
      secondary: {
        backgroundColor: "$progress-bar--indicator--secondary--background",
      },
      accent: {
        backgroundColor: "$progress-bar--indicator--accent--background",
      },
      error: {
        backgroundColor: "$progress-bar--indicator--error--background",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export { StyledProgressRoot, StyledProgressIndicator };
