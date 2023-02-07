import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";

const StyledTag: any = styled(Flex, {
  backgroundColor: "$$backgroundColor",
  borderRadius: "$4",

  "&, *": {
    color: "$$textColor !important",
  },

  variants: {
    size: {
      standard: {
        height: "$7",
        padding: "0 calc($3 + $2)",
      },
      small: {
        height: "$6",
        padding: "0 $3",
      },
    },
    variant: {
      filled: {},
      outlined: {},
    },
    color: {
      primary: {
        $$backgroundColor: "$colors-tag--primary--background-color",
        $$textColor: "$colors-tag--primary--text",
      },
      unstyled: {
        $$backgroundColor: "$colors-tag--unstyled--background-color",
        $$textColor: "$colors-tag--unstyled--text",
      },
      secondary: {
        $$backgroundColor: "$colors-tag--secondary--background-color",
        $$textColor: "$colors-tag--secondary--text",
      },
      accent: {
        $$backgroundColor: "$colors-tag--accent--background-color",
        $$textColor: "$colors-tag--accent--text",
      },
      error: {
        $$backgroundColor: "$colors-tag--error--background-color",
        $$textColor: "$colors-tag--error--text",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    size: "standard",
    variant: "filled",
  },
});

export { StyledTag };
