import { styled } from "@artly-ui/core";
import { Separator } from "@artly-ui/separator";
import { StyledText } from "@artly-ui/text";
import * as SelectPrimitives from "@radix-ui/react-select";

const StyledSelectRoot = styled(SelectPrimitives.Root, {});

const StyledSelectIcon = styled(SelectPrimitives.Icon, {
  transition: "color 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  marginTop: "$1",
});
StyledSelectIcon.toString = () => `.${StyledSelectIcon.className}`;

const StyledSelectValue = styled(SelectPrimitives.Value, {
  whiteSpace: "nowrap",
});
StyledSelectValue.toString = () => `.${StyledSelectValue.className}`;

const StyledLegendSpan = styled(StyledText, {
  paddingLeft: "$3",
  paddingRight: "$2",
  display: "inline-block",
  visibility: "visible",
  transition: "color 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  whiteSpace: "nowrap",
});
StyledLegendSpan.toString = () => `.${StyledLegendSpan.className}`;

const StyledFieldSet = styled("fieldset", {
  borderRadius: "inherit",
  inset: "$1 0 0",
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  transition:
    "border-width 200ms linear, border-color 200ms cubic-bezier(0.87, 0, 0.13, 1)",

  variants: {
    shape: {
      standard: {
        borderBottomColor: "$$borderColor",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      },
      outlined: {
        borderColor: "$$borderColor",
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "$2",
        paddingLeft: "calc($3 + $2)",
      },
      filled: {},
    },
  },

  defaultVariants: {
    shape: "standard",
  },
});
StyledFieldSet.toString = () => `.${StyledFieldSet.className}`;

const StyledLegend = styled("legend", {
  display: "block",
  float: "unset",
  height: "calc($2 + $3)",
  overflow: "hidden",
  width: 0,

  variants: {
    hasValue: {
      true: {
        width: "initial",
        overflow: "initial",
      },
    },
  },

  defaultVariants: {
    hasValue: false,
  },
});
StyledLegend.toString = () => `.${StyledLegend.className}`;

const StyledSelectTrigger = styled(SelectPrimitives.Trigger, {
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  display: "inline-flex",
  gap: "$4",
  justifyContent: "space-between",
  minWidth: "100%",
  position: "relative",
  $$borderColor: "$$borderColorNormal",

  [`${StyledText.toString()}`]: {
    transition: "color 150ms cubic-bezier(0.87, 0, 0.13, 1)",
  },

  [`${StyledSelectIcon.toString()}`]: {
    color: "$$colorIcon",
  },

  [`span ${StyledText.toString()}, ${StyledLegendSpan.toString()}`]: {
    color: "$$colorTextValue",
  },

  "&[data-disabled]": {
    $$borderColor: "$$borderColorDisabled",

    [`${StyledSelectIcon.toString()}`]: {
      color: "$$colorIconDisabled",
    },

    [`span ${StyledText.toString()}, ${StyledLegendSpan.toString()}`]: {
      color: "$$colorTextValueDisabled",
    },
  },

  "&:not([data-disabled])": {
    "&:hover": {
      $$borderColor: "$$borderColorHover",
    },

    "&:focus": {
      $$borderColor: "$$borderColorFocus",

      [`&:not([data-placeholder]) ${StyledLegend.toString()} ${StyledLegendSpan.toString()}`]:
        {
          color: "$$colorTextValueFocus",
        },
    },
  },

  variants: {
    shape: {
      standard: {
        padding: "$6 $3 $3 $3",

        "&:hover, &:focus": {
          [`${StyledFieldSet.toString()}`]: {
            borderWidth: "2px",
          },
        },
      },
      outlined: {
        padding: "$5 $3 calc($3 + $2) $5",
      },
    },
    color: {
      unstyled: {
        $$colorIcon: "$colors-select--unstyled--icon--color-normal",
        $$colorIconDisabled: "$colors-select--unstyled--icon--color-disabled",
        $$colorTextValue: "$colors-select--unstyled--trigger--color-normal",
        $$colorTextValueDisabled:
          "$colors-select--unstyled--trigger--color-disabled",
        $$borderColorNormal:
          "$colors-select--unstyled--trigger--border-color-normal",
        $$borderColorHover:
          "$colors-select--unstyled--trigger--border-color-hover",
        $$borderColorFocus:
          "$colors-select--unstyled--trigger--border-color-focus",
        $$borderColorDisabled:
          "$colors-select--unstyled--trigger--border-color-disabled",
        $$colorTextValueFocus: "$colors-select--unstyled--text-color-focus",
      },
      primary: {
        $$colorIcon: "$colors-select--primary--icon--color-normal",
        $$colorIconDisabled: "$colors-select--primary--icon--color-disabled",
        $$colorTextValue: "$colors-select--primary--trigger--color-normal",
        $$colorTextValueDisabled:
          "$colors-select--primary--trigger--color-disabled",
        $$borderColorNormal:
          "$colors-select--primary--trigger--border-color-normal",
        $$borderColorHover:
          "$colors-select--primary--trigger--border-color-hover",
        $$borderColorFocus:
          "$colors-select--primary--trigger--border-color-focus",
        $$borderColorDisabled:
          "$colors-select--primary--trigger--border-color-disabled",
        $$colorTextValueFocus: "$colors-select--primary--text-color-focus",
      },
      secondary: {
        $$colorIcon: "$colors-select--secondary--icon--color-normal",
        $$colorIconDisabled: "$colors-select--secondary--icon--color-disabled",
        $$colorTextValue: "$colors-select--secondary--trigger--color-normal",
        $$colorTextValueDisabled:
          "$colors-select--secondary--trigger--color-disabled",
        $$borderColorNormal:
          "$colors-select--secondary--trigger--border-color-normal",
        $$borderColorHover:
          "$colors-select--secondary--trigger--border-color-hover",
        $$borderColorFocus:
          "$colors-select--secondary--trigger--border-color-focus",
        $$borderColorDisabled:
          "$colors-select--secondary--trigger--border-color-disabled",
        $$colorTextValueFocus: "$colors-select--secondary--text-color-focus",
      },
      accent: {
        $$colorIcon: "$colors-select--accent--icon--color-normal",
        $$colorIconDisabled: "$colors-select--accent--icon--color-disabled",
        $$colorTextValue: "$colors-select--accent--trigger--color-normal",
        $$colorTextValueDisabled:
          "$colors-select--accent--trigger--color-disabled",
        $$borderColorNormal:
          "$colors-select--accent--trigger--border-color-normal",
        $$borderColorHover:
          "$colors-select--accent--trigger--border-color-hover",
        $$borderColorFocus:
          "$colors-select--accent--trigger--border-color-focus",
        $$borderColorDisabled:
          "$colors-select--accent--trigger--border-color-disabled",
        $$colorTextValueFocus: "$colors-select--accent--text-color-focus",
      },
      error: {
        $$colorIcon: "$colors-select--error--icon--color-normal",
        $$colorIconDisabled: "$colors-select--error--icon--color-disabled",
        $$colorTextValue: "$colors-select--error--trigger--color-normal",
        $$colorTextValueDisabled:
          "$colors-select--error--trigger--color-disabled",
        $$borderColorNormal:
          "$colors-select--error--trigger--border-color-normal",
        $$borderColorHover:
          "$colors-select--error--trigger--border-color-hover",
        $$borderColorFocus:
          "$colors-select--error--trigger--border-color-focus",
        $$borderColorDisabled:
          "$colors-select--error--trigger--border-color-disabled",
        $$colorTextValueFocus: "$colors-select--error--text-color-focus",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    shape: "standard",
  },
});

const StyledSelectPortal = styled(SelectPrimitives.Portal, {});

const StyledSelectContent = styled(SelectPrimitives.Content, {
  overflow: "hidden",
  backgroundColor: "$select--content--background-color",
  borderRadius: "$1",
  $$boxShadow: "$colors-black-60 0 $sizes-3 $sizes-6",
  boxShadow: "$$boxShadow",
  minWidth: "calc($13 * 1.5)",
});

const StyledSelectViewPort = styled(SelectPrimitives.Viewport, {});

const StyledSelectItem = styled(SelectPrimitives.Item, {
  alignItems: "center",
  backgroundColor: "$$backgroundColorNormal",
  borderRadius: "$2",
  display: "flex",
  gap: "$3",
  margin: "0 auto",
  maxWidth: "calc(100% - $3)",
  padding: "$3 $7 $3 $7",
  position: "relative",
  userSelect: "none",

  "&, *": {
    transition: "background-color 200ms linear, color 200ms linear",
  },

  [`${StyledText.toString()}`]: {
    color: "$$textColorNormal",
  },

  "&:hover": {
    backgroundColor: "$$backgroundColorHover",
    [`${StyledText.toString()}`]: {
      color: "$$textColorHover",
    },
  },

  "&:focus": {
    backgroundColor: "$$backgroundColorFocus",
    [`${StyledText.toString()}`]: {
      color: "$$textColorFocus",
    },
  },

  "&[data-highlighted]": {
    outline: "none",
    backgroundColor: "$$backgroundColorHighlighted",
    [`${StyledText.toString()}`]: {
      color: "$$textColorHighlighted",
    },
  },

  "&[data-disabled]": {
    pointerEvents: "none",

    [`${StyledText.toString()}`]: {
      color: "$$textColorDisabled",
    },
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorNormal:
          "$colors-select--unstyled--item--background-color--normal",
        $$backgroundColorHover:
          "$colors-select--unstyled--item--background-color--hover",
        $$backgroundColorFocus:
          "$colors-select--unstyled--item--background-color--focus",
        $$backgroundColorHighlighted:
          "$colors-select--unstyled--item--background-color--focus",
        $$textColorNormal:
          "$colors-select--unstyled--item--text--color--normal",
        $$textColorHover: "$colors-select--unstyled--item--text--color--hover",
        $$textColorFocus: "$colors-select--unstyled--item--text--color--focus",
        $$textColorHighlighted:
          "$colors-select--unstyled--item--text--color--focus",
        $$textColorDisabled:
          "$colors-select--unstyled--item--text--color--disabled",
      },
      primary: {
        $$backgroundColorNormal:
          "$colors-select--primary--item--background-color--normal",
        $$backgroundColorHover:
          "$colors-select--primary--item--background-color--hover",
        $$backgroundColorFocus:
          "$colors-select--primary--item--background-color--focus",
        $$backgroundColorHighlighted:
          "$colors-select--primary--item--background-color--focus",
        $$textColorNormal: "$colors-select--primary--item--text--color--normal",
        $$textColorHover: "$colors-select--primary--item--text--color--hover",
        $$textColorFocus: "$colors-select--primary--item--text--color--focus",
        $$textColorHighlighted:
          "$colors-select--primary--item--text--color--focus",
        $$textColorDisabled:
          "$colors-select--primary--item--text--color--disabled",
      },
      secondary: {
        $$backgroundColorNormal:
          "$colors-select--secondary--item--background-color--normal",
        $$backgroundColorHover:
          "$colors-select--secondary--item--background-color--hover",
        $$backgroundColorFocus:
          "$colors-select--secondary--item--background-color--focus",
        $$backgroundColorHighlighted:
          "$colors-select--secondary--item--background-color--focus",
        $$textColorHover: "$colors-select--secondary--item--text--color--hover",
        $$textColorFocus: "$colors-select--secondary--item--text--color--focus",
        $$textColorHighlighted:
          "$colors-select--secondary--item--text--color--focus",
        $$textColorNormal:
          "$colors-select--secondary--item--text--color--normal",
        $$textColorDisabled:
          "$colors-select--secondary--item--text--color--disabled",
      },
      accent: {
        $$backgroundColorNormal:
          "$colors-select--accent--item--background-color--normal",
        $$backgroundColorHover:
          "$colors-select--accent--item--background-color--hover",
        $$backgroundColorFocus:
          "$colors-select--accent--item--background-color--focus",
        $$backgroundColorHighlighted:
          "$colors-select--accent--item--background-color--focus",
        $$textColorNormal: "$colors-select--accent--item--text--color--normal",
        $$textColorHover: "$colors-select--accent--item--text--color--hover",
        $$textColorFocus: "$colors-select--accent--item--text--color--focus",
        $$textColorHighlighted:
          "$colors-select--accent--item--text--color--focus",
        $$textColorDisabled:
          "$colors-select--accent--item--text--color--disabled",
      },
      error: {
        $$backgroundColorNormal:
          "$colors-select--error--item--background-color--normal",
        $$backgroundColorHover:
          "$colors-select--error--item--background-color--hover",
        $$backgroundColorFocus:
          "$colors-select--error--item--background-color--focus",
        $$backgroundColorHighlighted:
          "$colors-select--error--item--background-color--focus",
        $$textColorNormal: "$colors-select--error--item--text--color--normal",
        $$textColorHover: "$colors-select--error--item--text--color--hover",
        $$textColorFocus: "$colors-select--error--item--text--color--focus",
        $$textColorHighlighted:
          "$colors-select--error--item--text--color--focus",
        $$textColorDisabled:
          "$colors-select--error--item--text--color--disabled",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});

const StyledSelectItemText = styled(SelectPrimitives.ItemText, {});

const StyledSelectItemIndicator = styled(SelectPrimitives.ItemIndicator, {
  pointerEvents: "none",
  position: "absolute",
  left: "$3",
});

const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "$6",
  backgroundColor: "$select--content--background-color",
  cursor: "default",
};

const StyledSelectScrollUpButton = styled(SelectPrimitives.ScrollUpButton, {
  ...scrollButtonStyles,

  "*, svg": {
    fill: "$$color",
    color: "$$color",
  },

  variants: {
    color: {
      unstyled: {
        $$color: "$colors-select--unstyled--icon-up-down--color",
      },
      primary: {
        $$color: "$colors-select--primary--icon-up-down--color",
      },
      secondary: {
        $$color: "$colors-select--secondary--icon-up-down--color",
      },
      accent: {
        $$color: "$colors-select--accent--icon-up-down--color",
      },
      error: {
        $$color: "$colors-select--error--icon-up-down--color",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});

const StyledSelectScrollDownButton = styled(SelectPrimitives.ScrollDownButton, {
  ...scrollButtonStyles,

  "*, svg": {
    fill: "$$color",
    color: "$$color",
  },

  variants: {
    color: {
      unstyled: {
        $$color: "$colors-select--unstyled--icon-up-down--color",
      },
      primary: {
        $$color: "$colors-select--primary--icon-up-down--color",
      },
      secondary: {
        $$color: "$colors-select--secondary--icon-up-down--color",
      },
      accent: {
        $$color: "$colors-select--accent--icon-up-down--color",
      },
      error: {
        $$color: "$colors-select--error--icon-up-down--color",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});

const StyledSelectLabel = styled(SelectPrimitives.Label, {
  padding: "$3 $6 $2 $6",
});
StyledSelectLabel.toString = () => `.${StyledSelectLabel.className}`;

const StyledSelectGroup = styled(SelectPrimitives.Group, {
  paddingBottom: "$1",
});

const StyledSelectSeparator = styled(Separator, {});

const StyledSelectArrow = styled(SelectPrimitives.Arrow, {});

export {
  StyledSelectRoot,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectIcon,
  StyledSelectPortal,
  StyledSelectContent,
  StyledSelectViewPort,
  StyledSelectItem,
  StyledSelectItemText,
  StyledSelectItemIndicator,
  StyledSelectScrollUpButton,
  StyledSelectScrollDownButton,
  StyledSelectGroup,
  StyledSelectLabel,
  StyledSelectSeparator,
  StyledSelectArrow,
  StyledFieldSet,
  StyledLegend,
  StyledLegendSpan,
};
