import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import { Text } from "@artly-ui/text";
import * as SwitchPrimitives from "@radix-ui/react-switch";

const StyledSwitchThumb = styled(SwitchPrimitives.Thumb, {
  display: "block",
  width: "$6",
  height: "$6",
  backgroundColor: "$$backgroundColorThumbNormal",
  borderRadius: "$4",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  transition:
    "transform 100ms cubic-bezier(0.87, 0, 0.13, 1), background-color 200ms linear",
  transform: "translateX($sizes-1)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(calc(100% - $sizes-1))",
    backgroundColor: "$$backgroundColorThumbChecked",
    $$boxShadow: "none",

    "&:disabled, &[disabled], &[data-disabled]": {
      backgroundColor: "$$backgroundColorThumbDisabledChecked",
    },
  },

  '&[data-state="unchecked"]': {
    "&:disabled, &[disabled], &[data-disabled]": {
      $$boxShadow: "none",
      backgroundColor: "$$backgroundColorThumbDisabledUnchecked",
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
    },
  },

  defaultVariants: {
    color: "primary",
  },
});
StyledSwitchThumb.toString = () => `.${StyledSwitchThumb.className}`;

const StyledSwitchRoot = styled(SwitchPrimitives.Root, {
  all: "unset",
  backgroundColor: "$$backgroundColorUnchecked",
  borderRadius: "$4",
  height: "calc($6 + $2)",
  display: "inline-flex",
  alignItems: "center",
  transition: "background-color 200ms linear",
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

  variants: {
    color: {
      primary: {
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
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

const StyledSwitchContainer = styled(Flex, {
  flexWrap: "nowrap",
});

const StyledSwitchLabel = styled(Text, {});

export {
  StyledSwitchRoot,
  StyledSwitchThumb,
  StyledSwitchContainer,
  StyledSwitchLabel,
};
