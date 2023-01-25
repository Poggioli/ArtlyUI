import { styled } from "@artly-ui/core";
import { body1 } from "@artly-ui/tokens";
import * as AvatarPrimitives from "@radix-ui/react-avatar";

const StyledAvatarRoot = styled(AvatarPrimitives.Root, {
  alignItems: "center",
  borderRadius: "$4",
  display: "inline-flex",
  justifyContent: "center",
  overflow: "hidden",
  userSelect: "none",
  verticalAlign: "middle",

  variants: {
    size: {
      small: {
        width: "$6",
        height: "$6",
      },
      standard: {
        width: "$9",
        height: "$9",
      },
      large: {
        width: "$12",
        height: "$12",
      },
      extraLarge: {
        width: "calc($13 * 2)",
        height: "calc($13 * 2)",
      },
    },
  },

  defaultVariants: {
    size: "standard",
  },
});

const StyledAvatarImage = styled(AvatarPrimitives.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledAvatarFallback = styled(AvatarPrimitives.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  variants: {
    color: {
      primary: {
        backgroundColor: "$avatar--primary--background",
        color: "$avatar--primary--text",
      },
      secondary: {
        backgroundColor: "$avatar--secondary--background",
        color: "$avatar--secondary--text",
      },
      accent: {
        backgroundColor: "$avatar--accent--background",
        color: "$avatar--accent--text",
      },
      standard: {
        backgroundColor: "$avatar--standard--background",
        color: "$avatar--standard--text",
      },
    },
    size: {
      small: {
        width: "$6",
        height: "$6",
        ...body1,
        fontSize: "$1",
      },
      standard: {
        width: "$9",
        height: "$9",
        ...body1,
      },
      large: {
        width: "$12",
        height: "$12",
        ...body1,
        fontSize: "$6",
      },
      extraLarge: {
        width: "calc($13 * 2)",
        height: "calc($13 * 2)",
        ...body1,
        fontSize: "$10",
      },
    },
  },

  defaultVariants: {
    size: "standard",
    color: "primary",
  },
});

export { StyledAvatarRoot, StyledAvatarImage, StyledAvatarFallback };
