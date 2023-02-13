import { styled } from "@artly-ui/core";
import { StyledText } from "@artly-ui/text";
import * as ToggleGroupPrimitives from "@radix-ui/react-toggle-group";

const StyledToggleGroupItem = styled(ToggleGroupPrimitives.Item, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: -1,
  transition:
    "background-color 200ms linear, border-color 200ms cubic-bezier(0.87, 0, 0.13, 1)",

  "&:first-child": {
    marginLeft: 0,
    borderTopLeftRadius: "$1",
    borderBottomLeftRadius: "$1",
  },

  "&:last-child": {
    borderTopRightRadius: "$1",
    borderBottomRightRadius: "$1",
  },
});
StyledToggleGroupItem.toString = () => `.${StyledToggleGroupItem.className}`;

const StyledToggleGroupRoot = styled(ToggleGroupPrimitives.Root, {
  borderRadius: "$1",
  display: "inline-flex",

  [`${StyledToggleGroupItem.toString()}`]: {
    "&:enabled": {
      borderColor: "$$borderColorNormal",

      "&:hover": {
        zIndex: "2",
        borderColor: "$$borderColorHover !important",
      },

      "&:focus": {
        zIndex: "2",
        borderColor: "$$borderColorFocus !important",
      },

      "&[data-state=off]": {
        [`${StyledText.toString()}`]: {
          color: "$$colorNormal",
          svg: {
            fontSize: "inherit",
            fill: "$$colorNormal",
            color: "$$colorNormal",
          },
        },

        backgroundColor: "$$backgroundColorUncheckedNormal",

        "&:hover": {
          backgroundColor: "$$backgroundColorUncheckedHover",
        },

        "&:focus": {
          backgroundColor: "$$backgroundColorUncheckedFocus",
        },
      },

      "&[data-state=on]": {
        backgroundColor: "$$backgroundColorChecked",
        borderColor: "$$borderColorChecked",

        [`${StyledText.toString()}`]: {
          color: "$$colorNormal",
          svg: {
            fontSize: "inherit",
            fill: "$$colorNormal",
            color: "$$colorNormal",
          },
        },
      },
    },

    "&:disabled, &[disabled], &[aria-disabled=true]": {
      [`${StyledText.toString()}`]: {
        color: "$$colorDisabled",
        svg: {
          fontSize: "inherit",
          fill: "$$colorDisabled",
          color: "$$colorDisabled",
        },
      },

      borderColor: "$$borderColorDisabled",
      boxShadow: "none",

      "&[data-state=off]": {
        backgroundColor: "$$backgroundColorUncheckedDisabled",
      },

      "&[data-state=on]": {
        backgroundColor: "$$backgroundColorCheckedDisabled",
      },
    },
  },

  "&:disabled, &[disabled], &[aria-disabled=true]": {
    boxShadow: "none",
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorUncheckedNormalUnborderedUnshaded:
          "$colors-toggle-group--unstyled--background-color--unchecked--normal-unbordered-unshaded",
        $$backgroundColorUncheckedNormal:
          "$colors-toggle-group--unstyled--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-toggle-group--unstyled--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-toggle-group--unstyled--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-toggle-group--unstyled--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-toggle-group--unstyled--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-toggle-group--unstyled--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-toggle-group--unstyled--border-color--checked",
        $$borderColorNormal:
          "$colors-toggle-group--unstyled--border-color--normal",
        $$borderColorHover:
          "$colors-toggle-group--unstyled--border-color--hover",
        $$borderColorFocus:
          "$colors-toggle-group--unstyled--border-color--focus",
        $$borderColorDisabled:
          "$colors-toggle-group--unstyled--border-color--disabled",
        $$colorNormal: "$colors-toggle-group--unstyled--color",
        $$colorDisabled: "$colors-toggle-group--unstyled--color--disabled",
      },
      primary: {
        $$backgroundColorUncheckedNormalUnborderedUnshaded:
          "$colors-toggle-group--primary--background-color--unchecked--normal-unbordered-unshaded",
        $$backgroundColorUncheckedNormal:
          "$colors-toggle-group--primary--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-toggle-group--primary--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-toggle-group--primary--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-toggle-group--primary--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-toggle-group--primary--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-toggle-group--primary--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-toggle-group--primary--border-color--checked",
        $$borderColorNormal:
          "$colors-toggle-group--primary--border-color--normal",
        $$borderColorHover:
          "$colors-toggle-group--primary--border-color--hover",
        $$borderColorFocus:
          "$colors-toggle-group--primary--border-color--focus",
        $$borderColorDisabled:
          "$colors-toggle-group--primary--border-color--disabled",
        $$colorNormal: "$colors-toggle-group--primary--color",
        $$colorDisabled: "$colors-toggle-group--primary--color--disabled",
      },
      secondary: {
        $$backgroundColorUncheckedNormalUnborderedUnshaded:
          "$colors-toggle-group--secondary--background-color--unchecked--normal-unbordered-unshaded",
        $$backgroundColorUncheckedNormal:
          "$colors-toggle-group--secondary--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-toggle-group--secondary--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-toggle-group--secondary--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-toggle-group--secondary--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-toggle-group--secondary--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-toggle-group--secondary--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-toggle-group--secondary--border-color--checked",
        $$borderColorNormal:
          "$colors-toggle-group--secondary--border-color--normal",
        $$borderColorHover:
          "$colors-toggle-group--secondary--border-color--hover",
        $$borderColorFocus:
          "$colors-toggle-group--secondary--border-color--focus",
        $$borderColorDisabled:
          "$colors-toggle-group--secondary--border-color--disabled",
        $$colorNormal: "$colors-toggle-group--secondary--color",
        $$colorDisabled: "$colors-toggle-group--secondary--color--disabled",
      },
      accent: {
        $$backgroundColorUncheckedNormalUnborderedUnshaded:
          "$colors-toggle-group--accent--background-color--unchecked--normal-unbordered-unshaded",
        $$backgroundColorUncheckedNormal:
          "$colors-toggle-group--accent--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-toggle-group--accent--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-toggle-group--accent--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-toggle-group--accent--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-toggle-group--accent--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-toggle-group--accent--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-toggle-group--accent--border-color--checked",
        $$borderColorNormal:
          "$colors-toggle-group--accent--border-color--normal",
        $$borderColorHover: "$colors-toggle-group--accent--border-color--hover",
        $$borderColorFocus: "$colors-toggle-group--accent--border-color--focus",
        $$borderColorDisabled:
          "$colors-toggle-group--accent--border-color--disabled",
        $$colorNormal: "$colors-toggle-group--accent--color",
        $$colorDisabled: "$colors-toggle-group--accent--color--disabled",
      },
      error: {
        $$backgroundColorUncheckedNormalUnborderedUnshaded:
          "$colors-toggle-group--error--background-color--unchecked--normal-unbordered-unshaded",
        $$backgroundColorUncheckedNormal:
          "$colors-toggle-group--error--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-toggle-group--error--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-toggle-group--error--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-toggle-group--error--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-toggle-group--error--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-toggle-group--error--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-toggle-group--error--border-color--checked",
        $$borderColorNormal:
          "$colors-toggle-group--error--border-color--normal",
        $$borderColorHover: "$colors-toggle-group--error--border-color--hover",
        $$borderColorFocus: "$colors-toggle-group--error--border-color--focus",
        $$borderColorDisabled:
          "$colors-toggle-group--error--border-color--disabled",
        $$colorNormal: "$colors-toggle-group--error--color",
        $$colorDisabled: "$colors-toggle-group--error--color--disabled",
      },
    },
    bordered: {
      true: {
        [`${StyledToggleGroupItem.toString()}`]: {
          borderWidth: 1,
          borderStyle: "solid",
        },
      },
    },
    shaded: {
      true: {
        $$boxShadow: "$colors-black-30 0 $sizes-3 $sizes-6",
        boxShadow: "$$boxShadow",
      },
    },
    size: {
      small: {
        [`${StyledToggleGroupItem.toString()}`]: {
          padding: "$1 $3",
        },
      },
      standard: {
        [`${StyledToggleGroupItem.toString()}`]: {
          padding: "$3 $4",
        },
      },
      large: {
        [`${StyledToggleGroupItem.toString()}`]: {
          padding: "$4",
        },
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
    bordered: true,
    shaded: true,
    size: "standard",
  },

  compoundVariants: [
    {
      bordered: false,
      shaded: false,
      css: {
        backgroundColor: "$$backgroundColorUncheckedNormalUnborderedUnshaded",
      },
    },
  ],
});

export { StyledToggleGroupRoot, StyledToggleGroupItem };
