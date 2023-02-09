import { styled } from "@artly-ui/core";
import { StyledFlex } from "@artly-ui/flex";

const StyledIconContainer = styled(StyledFlex, {
  variants: {
    small: {
      true: {},
    },
    position: {
      left: {},
      right: {},
    },
  },

  defaultVariants: {
    small: false,
    position: "left",
  },

  compoundVariants: [
    {
      small: true,
      position: "left",
      css: {
        marginLeft: "-$2",
      },
    },
    {
      small: true,
      position: "right",
      css: {
        marginRight: "-$2",
      },
    },
  ],
});

const StyledTag = styled(StyledFlex, {
  alignItems: "center",
  borderRadius: "$4",
  cursor: "default",
  gap: "$3",
  wrap: "nowrap",
  outlineColor: "transparent",
  outlineStyle: "solid",
  outlineWidth: "$sizes-1",
  transition: "outline-color 300ms cubic-bezier(0.87, 0, 0.13, 1)",

  "&, *": {
    color: "$$textColor !important",
  },

  "&:focus, &:has(*:focus)": {
    outlineColor: "$$outlinedColor",
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
        $$outlinedColor: "$colors-tag--primary--outlined-color",

        $$backgroundColorFilled:
          "$colors-tag--filled--primary--background-color",
        $$textColorFilled: "$colors-tag--filled--primary--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--primary--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--primary--border-color",
        $$textColorOutlined: "$colors-tag--outlined--primary--text",
      },
      unstyled: {
        $$outlinedColor: "$colors-tag--unstyled--outlined-color",

        $$backgroundColorFilled:
          "$colors-tag--filled--unstyled--background-color",
        $$textColorFilled: "$colors-tag--filled--unstyled--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--unstyled--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--unstyled--border-color",
        $$textColorOutlined: "$colors-tag--outlined--unstyled--text",
      },
      secondary: {
        $$outlinedColor: "$colors-tag--secondary--outlined-color",

        $$backgroundColorFilled:
          "$colors-tag--filled--secondary--background-color",
        $$textColorFilled: "$colors-tag--filled--secondary--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--secondary--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--secondary--border-color",
        $$textColorOutlined: "$colors-tag--outlined--secondary--text",
      },
      accent: {
        $$outlinedColor: "$colors-tag--accent--outlined-color",

        $$backgroundColorFilled:
          "$colors-tag--filled--accent--background-color",
        $$textColorFilled: "$colors-tag--filled--accent--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--accent--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--accent--border-color",
        $$textColorOutlined: "$colors-tag--outlined--accent--text",
      },
      error: {
        $$outlinedColor: "$colors-tag--error--outlined-color",

        $$backgroundColorFilled: "$colors-tag--filled--error--background-color",
        $$textColorFilled: "$colors-tag--filled--error--text",

        $$backgroundColorOutlined:
          "$colors-tag--outlined--error--background-color",
        $$borderColorOutlined: "$colors-tag--outlined--error--border-color",
        $$textColorOutlined: "$colors-tag--outlined--error--text",
      },
    },
    truncated: {
      true: {
        maxWidth: "100%",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    size: "standard",
    variant: "filled",
    truncated: true,
  },
});

export { StyledTag, StyledIconContainer };
