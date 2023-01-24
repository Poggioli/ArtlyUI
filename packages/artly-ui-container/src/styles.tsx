import { styled } from "@artly-ui/core";

const StyledContainer: any = styled("div", {
  boxSizing: "border-box",
  flexShrink: 0,
  marginInline: "auto",
  paddingInline: "$4",
  width: "100%",
  transition: "max-width 400ms ease-in-out",

  variants: {
    size: {
      small: {
        maxWidth: "calc($13 * 4)",
      },
      medium: {
        maxWidth: "calc($13 * 6)",
      },
      large: {
        maxWidth: "calc($13 * 8)",
      },
      extraLarge: {
        maxWidth: "calc($13 * 11)",
      },
    },

    center: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },

  defaultVariants: {
    size: "large",
    center: false,
  },
});

export { StyledContainer };
