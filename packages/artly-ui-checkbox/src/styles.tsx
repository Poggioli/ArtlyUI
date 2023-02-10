import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import { Label } from "@artly-ui/label";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

const StyledCheckboxIndicator = styled(CheckboxPrimitives.Indicator, {
  height: "$4",
  width: "$4",
});
StyledCheckboxIndicator.toString = () =>
  `.${StyledCheckboxIndicator.className}`;

const StyledCheckboxRoot = styled(CheckboxPrimitives.Root, {
  all: "unset",
  alignItems: "center",
  borderRadius: "$1",
  boxShadow: "$$boxShadow",
  display: "flex",
  height: "$4",
  justifyContent: "center",
  transition:
    "background-color 200ms linear, box-shadow 200ms cubic-bezier(0.87, 0, 0.13, 1)",
  width: "$4",

  "&:enabled": {
    $$boxShadow: "0 0 0 1px $$borderColorNormal",

    '&[data-state="unchecked"]': {
      backgroundColor: "$$backgroundColorUncheckedNormal",

      "&:hover": {
        backgroundColor: "$$backgroundColorUncheckedHover",
      },
      "&:focus": {
        backgroundColor: "$$backgroundColorUncheckedFocus",
      },
    },

    '&[data-state="checked"], &[data-state="indeterminate"]': {
      $$boxShadow: "0 0 0 1px $$borderColorChecked",
      backgroundColor: "$$backgroundColorChecked",
    },

    "&:hover": {
      $$boxShadow: "0 0 0 1px $$borderColorHover",
    },

    "&:focus": {
      $$boxShadow: "0 0 0 1px $$borderColorFocus",
    },

    [`${StyledCheckboxIndicator.toString()}`]: {
      "&, *": {
        color: "$$indicatorColor",
      },
    },
  },

  "&:disabled, &[disabled], &[aria-disabled=true]": {
    $$boxShadow: "0 0 0 1px $$borderColorDisabled",

    '&[data-state="unchecked"]': {
      backgroundColor: "$$backgroundColorUncheckedDisabled",
    },

    '&[data-state="checked"], &[data-state="indeterminate"]': {
      backgroundColor: "$$backgroundColorCheckedDisabled",
    },

    [`${StyledCheckboxIndicator.toString()}`]: {
      "&, *": {
        color: "$$indicatorColorDisabled",
      },
    },
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorUncheckedNormal:
          "$colors-checkbox--unstyled--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-checkbox--unstyled--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-checkbox--unstyled--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-checkbox--unstyled--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-checkbox--unstyled--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-checkbox--unstyled--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-checkbox--unstyled--border-color--checked",
        $$borderColorNormal: "$colors-checkbox--unstyled--border-color--normal",
        $$borderColorHover: "$colors-checkbox--unstyled--border-color--hover",
        $$borderColorFocus: "$colors-checkbox--unstyled--border-color--focus",
        $$borderColorDisabled:
          "$colors-checkbox--unstyled--border-color--disabled",
        $$indicatorColor: "$colors-checkbox--unstyled--indicator--color",
        $$indicatorColorDisabled:
          "$colors-checkbox--unstyled--indicator--color--disabled",
      },
      primary: {
        $$backgroundColorUncheckedNormal:
          "$colors-checkbox--primary--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-checkbox--primary--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-checkbox--primary--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-checkbox--primary--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-checkbox--primary--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-checkbox--primary--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-checkbox--primary--border-color--checked",
        $$borderColorNormal: "$colors-checkbox--primary--border-color--normal",
        $$borderColorHover: "$colors-checkbox--primary--border-color--hover",
        $$borderColorFocus: "$colors-checkbox--primary--border-color--focus",
        $$borderColorDisabled:
          "$colors-checkbox--primary--border-color--disabled",
        $$indicatorColor: "$colors-checkbox--primary--indicator--color",
        $$indicatorColorDisabled:
          "$colors-checkbox--primary--indicator--color--disabled",
      },
      secondary: {
        $$backgroundColorUncheckedNormal:
          "$colors-checkbox--secondary--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-checkbox--secondary--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-checkbox--secondary--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-checkbox--secondary--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-checkbox--secondary--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-checkbox--secondary--background-color--checked--disabled",
        $$borderColorChecked:
          "$colors-checkbox--secondary--border-color--checked",
        $$borderColorNormal:
          "$colors-checkbox--secondary--border-color--normal",
        $$borderColorHover: "$colors-checkbox--secondary--border-color--hover",
        $$borderColorFocus: "$colors-checkbox--secondary--border-color--focus",
        $$borderColorDisabled:
          "$colors-checkbox--secondary--border-color--disabled",
        $$indicatorColor: "$colors-checkbox--secondary--indicator--color",
        $$indicatorColorDisabled:
          "$colors-checkbox--secondary--indicator--color--disabled",
      },
      accent: {
        $$backgroundColorUncheckedNormal:
          "$colors-checkbox--accent--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-checkbox--accent--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-checkbox--accent--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-checkbox--accent--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-checkbox--accent--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-checkbox--accent--background-color--checked--disabled",
        $$borderColorChecked: "$colors-checkbox--accent--border-color--checked",
        $$borderColorNormal: "$colors-checkbox--accent--border-color--normal",
        $$borderColorHover: "$colors-checkbox--accent--border-color--hover",
        $$borderColorFocus: "$colors-checkbox--accent--border-color--focus",
        $$borderColorDisabled:
          "$colors-checkbox--accent--border-color--disabled",
        $$indicatorColor: "$colors-checkbox--accent--indicator--color",
        $$indicatorColorDisabled:
          "$colors-checkbox--accent--indicator--color--disabled",
      },
      error: {
        $$backgroundColorUncheckedNormal:
          "$colors-checkbox--error--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-checkbox--error--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-checkbox--error--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-checkbox--error--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-checkbox--error--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-checkbox--error--background-color--checked--disabled",
        $$borderColorChecked: "$colors-checkbox--error--border-color--checked",
        $$borderColorNormal: "$colors-checkbox--error--border-color--normal",
        $$borderColorHover: "$colors-checkbox--error--border-color--hover",
        $$borderColorFocus: "$colors-checkbox--error--border-color--focus",
        $$borderColorDisabled:
          "$colors-checkbox--error--border-color--disabled",
        $$indicatorColor: "$colors-checkbox--error--indicator--color",
        $$indicatorColorDisabled:
          "$colors-checkbox--error--indicator--color--disabled",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});

const StyledCheckboxContainer = styled(Flex, {});

const StyledCheckboxLabel = styled(Label, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  flex: 1,
});

export {
  StyledCheckboxRoot,
  StyledCheckboxIndicator,
  StyledCheckboxContainer,
  StyledCheckboxLabel,
};
