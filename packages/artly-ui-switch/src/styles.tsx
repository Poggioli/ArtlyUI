import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import { Label } from "@artly-ui/label";
import * as SwitchPrimitives from "@radix-ui/react-switch";

const StyledSwitchThumb = styled(SwitchPrimitives.Thumb, {
  backgroundColor: "$$backgroundColorThumbNormal",
  borderRadius: "$4",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  display: "block",
  height: "$6",
  transform: "translateX($sizes-1)",
  transition:
    "transform 200ms cubic-bezier(0.87, 0, 0.13, 1), background-color 200ms linear",
  width: "$6",
  willChange: "transform",

  '&[data-state="checked"]': {
    backgroundColor: "$$backgroundColorThumbChecked",
    $$boxShadow: "none",
    transform: "translateX(calc(100% - $sizes-1))",

    "&:disabled, &[disabled], &[data-disabled]": {
      backgroundColor: "$$backgroundColorThumbDisabledChecked",
    },
  },

  '&[data-state="unchecked"]': {
    "&:disabled, &[disabled], &[data-disabled]": {
      backgroundColor: "$$backgroundColorThumbDisabledUnchecked",
      $$boxShadow: "none",
    },
  },

  variants: {
    color: {
      primary: {
        $$backgroundColorThumbNormal:
          "$colors-switch--thumb--primary--background-color--normal",
        $$backgroundColorThumbChecked:
          "$colors-switch--thumb--primary--background-color--checked",
        $$backgroundColorThumbDisabledChecked:
          "$colors-switch--thumb--primary--background-color--disabled-checked",
        $$backgroundColorThumbDisabledUnchecked:
          "$colors-switch--thumb--primary--background-color--disabled-unchecked",
      },

      secondary: {
        $$backgroundColorThumbNormal:
          "$colors-switch--thumb--secondary--background-color--normal",
        $$backgroundColorThumbChecked:
          "$colors-switch--thumb--secondary--background-color--checked",
        $$backgroundColorThumbDisabledChecked:
          "$colors-switch--thumb--secondary--background-color--disabled-checked",
        $$backgroundColorThumbDisabledUnchecked:
          "$colors-switch--thumb--secondary--background-color--disabled-unchecked",
      },

      unstyled: {
        $$backgroundColorThumbNormal:
          "$colors-switch--thumb--unstyled--background-color--normal",
        $$backgroundColorThumbChecked:
          "$colors-switch--thumb--unstyled--background-color--checked",
        $$backgroundColorThumbDisabledChecked:
          "$colors-switch--thumb--unstyled--background-color--disabled-checked",
        $$backgroundColorThumbDisabledUnchecked:
          "$colors-switch--thumb--unstyled--background-color--disabled-unchecked",
      },

      accent: {
        $$backgroundColorThumbNormal:
          "$colors-switch--thumb--accent--background-color--normal",
        $$backgroundColorThumbChecked:
          "$colors-switch--thumb--accent--background-color--checked",
        $$backgroundColorThumbDisabledChecked:
          "$colors-switch--thumb--accent--background-color--disabled-checked",
        $$backgroundColorThumbDisabledUnchecked:
          "$colors-switch--thumb--accent--background-color--disabled-unchecked",
      },

      error: {
        $$backgroundColorThumbNormal:
          "$colors-switch--thumb--error--background-color--normal",
        $$backgroundColorThumbChecked:
          "$colors-switch--thumb--error--background-color--checked",
        $$backgroundColorThumbDisabledChecked:
          "$colors-switch--thumb--error--background-color--disabled-checked",
        $$backgroundColorThumbDisabledUnchecked:
          "$colors-switch--thumb--error--background-color--disabled-unchecked",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});
StyledSwitchThumb.toString = () => `.${StyledSwitchThumb.className}`;

const StyledSwitchRoot = styled(SwitchPrimitives.Root, {
  all: "unset",
  alignItems: "center",
  backgroundColor: "$$backgroundColorUnchecked",
  borderRadius: "$4",
  display: "inline-flex",
  height: "calc($6 + $2)",
  outlineColor: "transparent",
  outlineStyle: "solid",
  outlineWidth: "$sizes-1",
  transition:
    "background-color 200ms linear, outline-color 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  width: "$9",

  '&[data-state="checked"]': {
    backgroundColor: "$$backgroundColorChecked",
  },

  "&:disabled, &[disabled], &[aria-disabled=true]": {
    backgroundColor: "$$backgroundColorDisabledUnchecked",

    '&[data-state="checked"]': {
      backgroundColor: "$$backgroundColorDisabledChecked",
    },
  },

  [`&:hover[data-state="unchecked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbHoverUnchecked",
  },

  [`&:hover[data-state="checked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbHoverChecked",
  },

  [`&:focus[data-state="unchecked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbFocusUnchecked",
  },

  [`&:focus[data-state="checked"] ${StyledSwitchThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbFocusChecked",
  },

  "&:focus": {
    outlineColor: "$$outlinedColor",
  },

  variants: {
    color: {
      primary: {
        $$outlinedColor: "$colors-switch--primary--outline-color",
        $$backgroundColorUnchecked:
          "$colors-switch--root--primary--background-color--unchecked",
        $$backgroundColorChecked:
          "$colors-switch--root--primary--background-color--checked",
        $$backgroundColorDisabledUnchecked:
          "$colors-switch--root--primary--background-color--disabled-unchecked",
        $$backgroundColorDisabledChecked:
          "$colors-switch--root--primary--background-color--disabled-checked",
        $$backgroundColorThumbFocusUnchecked:
          "$colors-switch--thumb--primary--background-color--focus-unchecked",
        $$backgroundColorThumbFocusChecked:
          "$colors-switch--thumb--primary--background-color--focus-checked",
        $$backgroundColorThumbHoverUnchecked:
          "$colors-switch--thumb--primary--background-color--hover-unchecked",
        $$backgroundColorThumbHoverChecked:
          "$colors-switch--thumb--primary--background-color--hover-checked",
      },

      secondary: {
        $$outlinedColor: "$colors-switch--secondary--outline-color",
        $$backgroundColorUnchecked:
          "$colors-switch--root--secondary--background-color--unchecked",
        $$backgroundColorChecked:
          "$colors-switch--root--secondary--background-color--checked",
        $$backgroundColorDisabledUnchecked:
          "$colors-switch--root--secondary--background-color--disabled-unchecked",
        $$backgroundColorDisabledChecked:
          "$colors-switch--root--secondary--background-color--disabled-checked",
        $$backgroundColorThumbFocusUnchecked:
          "$colors-switch--thumb--secondary--background-color--focus-unchecked",
        $$backgroundColorThumbFocusChecked:
          "$colors-switch--thumb--secondary--background-color--focus-checked",
        $$backgroundColorThumbHoverUnchecked:
          "$colors-switch--thumb--secondary--background-color--hover-unchecked",
        $$backgroundColorThumbHoverChecked:
          "$colors-switch--thumb--secondary--background-color--hover-checked",
      },

      unstyled: {
        $$outlinedColor: "$colors-switch--unstyled--outline-color",
        $$backgroundColorUnchecked:
          "$colors-switch--root--unstyled--background-color--unchecked",
        $$backgroundColorChecked:
          "$colors-switch--root--unstyled--background-color--checked",
        $$backgroundColorDisabledUnchecked:
          "$colors-switch--root--unstyled--background-color--disabled-unchecked",
        $$backgroundColorDisabledChecked:
          "$colors-switch--root--unstyled--background-color--disabled-checked",
        $$backgroundColorThumbFocusUnchecked:
          "$colors-switch--thumb--unstyled--background-color--focus-unchecked",
        $$backgroundColorThumbFocusChecked:
          "$colors-switch--thumb--unstyled--background-color--focus-checked",
        $$backgroundColorThumbHoverUnchecked:
          "$colors-switch--thumb--unstyled--background-color--hover-unchecked",
        $$backgroundColorThumbHoverChecked:
          "$colors-switch--thumb--unstyled--background-color--hover-checked",
      },

      accent: {
        $$outlinedColor: "$colors-switch--accent--outline-color",
        $$backgroundColorUnchecked:
          "$colors-switch--root--accent--background-color--unchecked",
        $$backgroundColorChecked:
          "$colors-switch--root--accent--background-color--checked",
        $$backgroundColorDisabledUnchecked:
          "$colors-switch--root--accent--background-color--disabled-unchecked",
        $$backgroundColorDisabledChecked:
          "$colors-switch--root--accent--background-color--disabled-checked",
        $$backgroundColorThumbFocusUnchecked:
          "$colors-switch--thumb--accent--background-color--focus-unchecked",
        $$backgroundColorThumbFocusChecked:
          "$colors-switch--thumb--accent--background-color--focus-checked",
        $$backgroundColorThumbHoverUnchecked:
          "$colors-switch--thumb--accent--background-color--hover-unchecked",
        $$backgroundColorThumbHoverChecked:
          "$colors-switch--thumb--accent--background-color--hover-checked",
      },

      error: {
        $$outlinedColor: "$colors-switch--error--outline-color",
        $$backgroundColorUnchecked:
          "$colors-switch--root--error--background-color--unchecked",
        $$backgroundColorChecked:
          "$colors-switch--root--error--background-color--checked",
        $$backgroundColorDisabledUnchecked:
          "$colors-switch--root--error--background-color--disabled-unchecked",
        $$backgroundColorDisabledChecked:
          "$colors-switch--root--error--background-color--disabled-checked",
        $$backgroundColorThumbFocusUnchecked:
          "$colors-switch--thumb--error--background-color--focus-unchecked",
        $$backgroundColorThumbFocusChecked:
          "$colors-switch--thumb--error--background-color--focus-checked",
        $$backgroundColorThumbHoverUnchecked:
          "$colors-switch--thumb--error--background-color--hover-unchecked",
        $$backgroundColorThumbHoverChecked:
          "$colors-switch--thumb--error--background-color--hover-checked",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

const StyledSwitchContainer = styled(Flex, {});

const StyledSwitchLabel = styled(Label, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
});

export {
  StyledSwitchRoot,
  StyledSwitchThumb,
  StyledSwitchContainer,
  StyledSwitchLabel,
};
