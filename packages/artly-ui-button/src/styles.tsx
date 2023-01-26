import { styled } from "@artly-ui/core";
import { body1 } from "@artly-ui/tokens";

const StyledButton: any = styled("button", {
  alignItems: "center",
  appearance: "none",
  backgroundColor: "$$backgroundColorNormal",
  border: "none",
  borderRadius: "$1",
  boxSizing: "border-box",
  boxShadow: "none",
  color: "$$colorNormal",
  display: "inline-flex",
  gap: "$3",
  justifyContent: "center",
  margin: 0,
  minWidth: "$9",
  outline: "none",
  pointerEvents: "auto",
  textDecoration: "none",
  transition:
    "background-color 200ms cubic-bezier(.5, 1, 1, 1), color 200ms cubic-bezier(.5, 1, 1, 1)",
  userSelect: "none",
  verticalAlign: "middle",
  ...body1,
  letterSpacing: '$6',

  "&:hover": {
    backgroundColor: "$$backgroundColorHover",
  },

  "&:focus": {
    backgroundColor: "$$backgroundColorFocus",
  },

  "&:disabled": {
    backgroundColor: "$$backgroundColorDisabled",
    color: "$$colorDisabled",
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorBasicNormal:
          "$colors-button--basic--unstyled--background-normal",
        $$backgroundColorBasicHover:
          "$colors-button--basic--unstyled--background-hover",
        $$backgroundColorBasicFocus:
          "$colors-button--basic--unstyled--background-focus",
        $$backgroundColorBasicDisabled:
          "$colors-button--basic--unstyled--background-disabled",
        $$colorBasicNormal: "$colors-button--basic--unstyled--text-normal",
        $$colorBasicDisabled: "$colors-button--basic--text-disabled",

        $$backgroundColorFlatNormal:
          "$colors-button--flat--unstyled--background-normal",
        $$backgroundColorFlatHover:
          "$colors-button--flat--unstyled--background-hover",
        $$backgroundColorFlatFocus:
          "$colors-button--flat--unstyled--background-focus",
        $$backgroundColorFlatDisabled:
          "$colors-button--flat--unstyled--background-disabled",
        $$colorFlatNormal: "$colors-button--flat--unstyled--text-normal",
        $$colorFlatDisabled: "$colors-button--flat--text-disabled",

        $$backgroundColorStrokedNormal:
          "$colors-button--stroked--unstyled--background-normal",
        $$backgroundColorStrokedHover:
          "$colors-button--stroked--unstyled--background-hover",
        $$backgroundColorStrokedFocus:
          "$colors-button--stroked--unstyled--background-focus",
        $$backgroundColorStrokedDisabled:
          "$colors-button--stroked--unstyled--background-disabled",
        $$colorStrokedNormal: "$colors-button--stroked--unstyled--text-normal",
        $$colorStrokedDisabled: "$colors-button--stroked--text-disabled",
        $$borderColorStrokedNormal:
          "$colors-button--stroked--unstyled--border-normal",
        $$borderColorStrokedHover:
          "$colors-button--stroked--unstyled--border-hover",
        $$borderColorStrokedDisabled:
          "$colors-button--stroked--border-disabled",

        $$backgroundColorIconNormal:
          "$colors-button--icon--unstyled--background-normal",
        $$backgroundColorIconHover:
          "$colors-button--icon--unstyled--background-hover",
        $$backgroundColorIconFocus:
          "$colors-button--icon--unstyled--background-focus",
        $$backgroundColorIconDisabled:
          "$colors-button--icon--unstyled--background-disabled",
        $$colorIconNormal: "$colors-button--icon--unstyled--text-normal",
        $$colorIconDisabled: "$colors-button--icon--text-disabled",
      },
      primary: {
        $$backgroundColorBasicNormal:
          "$colors-button--basic--primary--background-normal",
        $$backgroundColorBasicHover:
          "$colors-button--basic--primary--background-hover",
        $$backgroundColorBasicFocus:
          "$colors-button--basic--primary--background-focus",
        $$backgroundColorBasicDisabled:
          "$colors-button--basic--primary--background-disabled",
        $$colorBasicNormal: "$colors-button--basic--primary--text-normal",
        $$colorBasicDisabled: "$colors-button--basic--text-disabled",

        $$backgroundColorFlatNormal:
          "$colors-button--flat--primary--background-normal",
        $$backgroundColorFlatHover:
          "$colors-button--flat--primary--background-hover",
        $$backgroundColorFlatFocus:
          "$colors-button--flat--primary--background-focus",
        $$backgroundColorFlatDisabled:
          "$colors-button--flat--primary--background-disabled",
        $$colorFlatNormal: "$colors-button--flat--primary--text-normal",
        $$colorFlatDisabled: "$colors-button--flat--text-disabled",

        $$backgroundColorStrokedNormal:
          "$colors-button--stroked--primary--background-normal",
        $$backgroundColorStrokedHover:
          "$colors-button--stroked--primary--background-hover",
        $$backgroundColorStrokedFocus:
          "$colors-button--stroked--primary--background-focus",
        $$backgroundColorStrokedDisabled:
          "$colors-button--stroked--primary--background-disabled",
        $$colorStrokedNormal: "$colors-button--stroked--primary--text-normal",
        $$colorStrokedDisabled: "$colors-button--stroked--text-disabled",
        $$borderColorStrokedNormal:
          "$colors-button--stroked--primary--border-normal",
        $$borderColorStrokedHover:
          "$colors-button--stroked--primary--border-hover",
        $$borderColorStrokedDisabled:
          "$colors-button--stroked--border-disabled",

        $$backgroundColorIconNormal:
          "$colors-button--icon--primary--background-normal",
        $$backgroundColorIconHover:
          "$colors-button--icon--primary--background-hover",
        $$backgroundColorIconFocus:
          "$colors-button--icon--primary--background-focus",
        $$backgroundColorIconDisabled:
          "$colors-button--icon--primary--background-disabled",
        $$colorIconNormal: "$colors-button--icon--primary--text-normal",
        $$colorIconDisabled: "$colors-button--icon--text-disabled",
      },
      secondary: {
        $$backgroundColorBasicNormal:
          "$colors-button--basic--secondary--background-normal",
        $$backgroundColorBasicHover:
          "$colors-button--basic--secondary--background-hover",
        $$backgroundColorBasicFocus:
          "$colors-button--basic--secondary--background-focus",
        $$backgroundColorBasicDisabled:
          "$colors-button--basic--secondary--background-disabled",
        $$colorBasicNormal: "$colors-button--basic--secondary--text-normal",
        $$colorBasicDisabled: "$colors-button--basic--text-disabled",

        $$backgroundColorFlatNormal:
          "$colors-button--flat--secondary--background-normal",
        $$backgroundColorFlatHover:
          "$colors-button--flat--secondary--background-hover",
        $$backgroundColorFlatFocus:
          "$colors-button--flat--secondary--background-focus",
        $$backgroundColorFlatDisabled:
          "$colors-button--flat--secondary--background-disabled",
        $$colorFlatNormal: "$colors-button--flat--secondary--text-normal",
        $$colorFlatDisabled: "$colors-button--flat--text-disabled",

        $$backgroundColorStrokedNormal:
          "$colors-button--stroked--secondary--background-normal",
        $$backgroundColorStrokedHover:
          "$colors-button--stroked--secondary--background-hover",
        $$backgroundColorStrokedFocus:
          "$colors-button--stroked--secondary--background-focus",
        $$backgroundColorStrokedDisabled:
          "$colors-button--stroked--secondary--background-disabled",
        $$colorStrokedNormal: "$colors-button--stroked--secondary--text-normal",
        $$colorStrokedDisabled: "$colors-button--stroked--text-disabled",
        $$borderColorStrokedNormal:
          "$colors-button--stroked--secondary--border-normal",
        $$borderColorStrokedHover:
          "$colors-button--stroked--secondary--border-hover",
        $$borderColorStrokedDisabled:
          "$colors-button--stroked--border-disabled",

        $$backgroundColorIconNormal:
          "$colors-button--icon--secondary--background-normal",
        $$backgroundColorIconHover:
          "$colors-button--icon--secondary--background-hover",
        $$backgroundColorIconFocus:
          "$colors-button--icon--secondary--background-focus",
        $$backgroundColorIconDisabled:
          "$colors-button--icon--secondary--background-disabled",
        $$colorIconNormal: "$colors-button--icon--secondary--text-normal",
        $$colorIconDisabled: "$colors-button--icon--text-disabled",
      },
      accent: {
        $$backgroundColorBasicNormal:
          "$colors-button--basic--accent--background-normal",
        $$backgroundColorBasicHover:
          "$colors-button--basic--accent--background-hover",
        $$backgroundColorBasicFocus:
          "$colors-button--basic--accent--background-focus",
        $$backgroundColorBasicDisabled:
          "$colors-button--basic--accent--background-disabled",
        $$colorBasicNormal: "$colors-button--basic--accent--text-normal",
        $$colorBasicDisabled: "$colors-button--basic--text-disabled",

        $$backgroundColorFlatNormal:
          "$colors-button--flat--accent--background-normal",
        $$backgroundColorFlatHover:
          "$colors-button--flat--accent--background-hover",
        $$backgroundColorFlatFocus:
          "$colors-button--flat--accent--background-focus",
        $$backgroundColorFlatDisabled:
          "$colors-button--flat--accent--background-disabled",
        $$colorFlatNormal: "$colors-button--flat--accent--text-normal",
        $$colorFlatDisabled: "$colors-button--flat--text-disabled",

        $$backgroundColorStrokedNormal:
          "$colors-button--stroked--accent--background-normal",
        $$backgroundColorStrokedHover:
          "$colors-button--stroked--accent--background-hover",
        $$backgroundColorStrokedFocus:
          "$colors-button--stroked--accent--background-focus",
        $$backgroundColorStrokedDisabled:
          "$colors-button--stroked--accent--background-disabled",
        $$colorStrokedNormal: "$colors-button--stroked--accent--text-normal",
        $$colorStrokedDisabled: "$colors-button--stroked--text-disabled",
        $$borderColorStrokedNormal:
          "$colors-button--stroked--accent--border-normal",
        $$borderColorStrokedHover:
          "$colors-button--stroked--accent--border-hover",
        $$borderColorStrokedDisabled:
          "$colors-button--stroked--border-disabled",

        $$backgroundColorIconNormal:
          "$colors-button--icon--accent--background-normal",
        $$backgroundColorIconHover:
          "$colors-button--icon--accent--background-hover",
        $$backgroundColorIconFocus:
          "$colors-button--icon--accent--background-focus",
        $$backgroundColorIconDisabled:
          "$colors-button--icon--accent--background-disabled",
        $$colorIconNormal: "$colors-button--icon--accent--text-normal",
        $$colorIconDisabled: "$colors-button--icon--text-disabled",
      },
      error: {
        $$backgroundColorBasicNormal:
          "$colors-button--basic--error--background-normal",
        $$backgroundColorBasicHover:
          "$colors-button--basic--error--background-hover",
        $$backgroundColorBasicFocus:
          "$colors-button--basic--error--background-focus",
        $$backgroundColorBasicDisabled:
          "$colors-button--basic--error--background-disabled",
        $$colorBasicNormal: "$colors-button--basic--error--text-normal",
        $$colorBasicDisabled: "$colors-button--basic--text-disabled",

        $$backgroundColorFlatNormal:
          "$colors-button--flat--error--background-normal",
        $$backgroundColorFlatHover:
          "$colors-button--flat--error--background-hover",
        $$backgroundColorFlatFocus:
          "$colors-button--flat--error--background-focus",
        $$backgroundColorFlatDisabled:
          "$colors-button--flat--error--background-disabled",
        $$colorFlatNormal: "$colors-button--flat--error--text-normal",
        $$colorFlatDisabled: "$colors-button--flat--text-disabled",

        $$backgroundColorStrokedNormal:
          "$colors-button--stroked--error--background-normal",
        $$backgroundColorStrokedHover:
          "$colors-button--stroked--error--background-hover",
        $$backgroundColorStrokedFocus:
          "$colors-button--stroked--error--background-focus",
        $$backgroundColorStrokedDisabled:
          "$colors-button--stroked--error--background-disabled",
        $$colorStrokedNormal: "$colors-button--stroked--error--text-normal",
        $$colorStrokedDisabled: "$colors-button--stroked--text-disabled",
        $$borderColorStrokedNormal:
          "$colors-button--stroked--error--border-normal",
        $$borderColorStrokedHover:
          "$colors-button--stroked--error--border-hover",
        $$borderColorStrokedDisabled:
          "$colors-button--stroked--border-disabled",

        $$backgroundColorIconNormal:
          "$colors-button--icon--error--background-normal",
        $$backgroundColorIconHover:
          "$colors-button--icon--error--background-hover",
        $$backgroundColorIconFocus:
          "$colors-button--icon--error--background-focus",
        $$backgroundColorIconDisabled:
          "$colors-button--icon--error--background-disabled",
        $$colorIconNormal: "$colors-button--icon--error--text-normal",
        $$colorIconDisabled: "$colors-button--icon--text-disabled",
      },
    },
    shape: {
      basic: {
        $$backgroundColorNormal: "$$backgroundColorBasicNormal",
        $$backgroundColorHover: "$$backgroundColorBasicHover",
        $$backgroundColorFocus: "$$backgroundColorBasicFocus",
        $$backgroundColorDisabled: "$$backgroundColorBasicDisabled",
        $$colorNormal: "$$colorBasicNormal",
        $$colorDisabled: "$$colorBasicDisabled",

        padding: "$3 $3",
      },
      stroked: {
        $$boxShadow: "0 0 0 1px $$borderColorStrokedNormal",
        $$backgroundColorNormal: "$$backgroundColorStrokedNormal",
        $$backgroundColorHover: "$$backgroundColorStrokedHover",
        $$backgroundColorFocus: "$$backgroundColorStrokedFocus",
        $$backgroundColorDisabled: "$$backgroundColorStrokedDisabled",
        $$colorNormal: "$$colorStrokedNormal",
        $$colorDisabled: "$$colorStrokedDisabled",

        boxShadow: "$$boxShadow",
        padding: "$3 $6",

        "&:hover": {
          $$boxShadow: "0 0 0 1px $$borderColorStrokedHover",
        },

        "&:disabled": {
          $$boxShadow: "0 0 0 1px $$borderColorStrokedDisabled",
        },
      },
      flat: {
        $$backgroundColorNormal: "$$backgroundColorFlatNormal",
        $$backgroundColorHover: "$$backgroundColorFlatHover",
        $$backgroundColorFocus: "$$backgroundColorFlatFocus",
        $$backgroundColorDisabled: "$$backgroundColorFlatDisabled",
        $$colorNormal: "$$colorFlatNormal",
        $$colorDisabled: "$$colorFlatDisabled",

        padding: "$3 $6",
      },
      icon: {
        $$backgroundColorNormal: "$$backgroundColorIconNormal",
        $$backgroundColorHover: "$$backgroundColorIconHover",
        $$backgroundColorFocus: "$$backgroundColorIconFocus",
        $$backgroundColorDisabled: "$$backgroundColorIconDisabled",
        $$colorNormal: "$$colorIconNormal",
        $$colorDisabled: "$$colorIconDisabled",

        borderRadius: "$4",
        padding: "calc($2 + $3)",
        height: "$9",
        width: "$9",

        "*": {
          fontSize: "$6",
        },

        svg: {
          height: "100%",
          width: "100%",
        },
      },
    },
    iconPosition: {
      none: {
        svg: {
          margin: 0,
        },
      },
      right: {
        svg: {
          height: "$5",
          marginRight: "calc($2 * -1)",
          width: "$5",
        },
      },
      left: {
        svg: {
          height: "$5",
          marginLeft: "calc($2 * -1)",
          width: "$5",
        },
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    shape: "basic",
    iconPosition: "none",
  },

  compoundVariants: [
    {
      iconPosition: "left",
      shape: "basic",
      css: {
        svg: {
          margin: 0,
        },
      },
    },
    {
      iconPosition: "right",
      shape: "basic",
      css: {
        svg: {
          margin: 0,
        },
      },
    },
  ],
});

export { StyledButton };
