import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";

const StyledTag: any = styled(Flex, {
  borderRadius: "$4",
  cursor: "default",

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
      filled: {
        backgroundColor: "$$backgroundColorFilled",
        $$textColor: "$$textColorFilled",
      },
      outlined: {
        backgroundColor: "$$backgroundColorOutlined",
        $$boxShadow: "0 0 0 1px $$borderColorOutlined",
        boxShadow: "$$boxShadow",
        $$textColor: "$$textColorOutlined",
      },
    },
    color: {
      primary: {
        $$backgroundColorFilled:
          "$colors-tag--filled--primary--background-color",
        $$textColorFilled: "$colors-tag--filled--primary--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--primary--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--primary--border-color",
        $$textColorOutlined: "$colors-tag--outlined--primary--text",
      },
      unstyled: {
        $$backgroundColorFilled:
          "$colors-tag--filled--unstyled--background-color",
        $$textColorFilled: "$colors-tag--filled--unstyled--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--unstyled--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--unstyled--border-color",
        $$textColorOutlined: "$colors-tag--outlined--unstyled--text",
      },
      secondary: {
        $$backgroundColorFilled:
          "$colors-tag--filled--secondary--background-color",
        $$textColorFilled: "$colors-tag--filled--secondary--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--secondary--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--secondary--border-color",
        $$textColorOutlined: "$colors-tag--outlined--secondary--text",
      },
      accent: {
        $$backgroundColorFilled:
          "$colors-tag--filled--accent--background-color",
        $$textColorFilled: "$colors-tag--filled--accent--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--accent--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--accent--border-color",
        $$textColorOutlined: "$colors-tag--outlined--accent--text",
      },
      error: {
        $$backgroundColorFilled: "$colors-tag--filled--error--background-color",
        $$textColorFilled: "$colors-tag--filled--error--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--error--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--error--border-color",
        $$textColorOutlined: "$colors-tag--outlined--error--text",
      },
    },
    hasIcon: {
      true: {},
    },
  },

  defaultVariants: {
    color: "unstyled",
    size: "standard",
    variant: "filled",
    hasIcon: false,
  },

  compoundVariants: [
    {
      hasIcon: true,
      size: "small",
      css: {
        paddingLeft: "$2",
      },
    },
  ],
});

export { StyledTag };
