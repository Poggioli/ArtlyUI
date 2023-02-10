import { styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import { Label } from "@artly-ui/label";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";

const StyledRadioGroupIndicator = styled(RadioGroupPrimitives.Indicator, {
  alignItems: "center",
  borderRadius: "$4",
  display: "none",
  justifyContent: "center",
  height: "$3",
  position: "relative",
  width: "$3",
});
StyledRadioGroupIndicator.toString = () =>
  `.${StyledRadioGroupIndicator.className}`;

const StyledRadioGroupItem = styled(RadioGroupPrimitives.Item, {
  all: "unset",
  alignItems: "center",
  borderRadius: "$4",
  display: "flex",
  height: "$4",
  justifyContent: "center",
  transition:
    "background-color 200ms linear, box-shadow 200ms cubic-bezier(0.87, 0, 0.13, 1)",
  width: "$4",
});
StyledRadioGroupItem.toString = () => `.${StyledRadioGroupItem.className}`;

const StyledRadioGroupRoot = styled(RadioGroupPrimitives.Root, {
  [`${StyledRadioGroupItem.toString()}`]: {
    boxShadow: "$$boxShadow",

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

      '&[data-state="checked"]': {
        $$boxShadow: "0 0 0 1px $$borderColorChecked",
        backgroundColor: "$$backgroundColorChecked",
      },

      "&:hover": {
        $$boxShadow: "0 0 0 1px $$borderColorHover",
      },

      "&:focus": {
        $$boxShadow: "0 0 0 1px $$borderColorFocus",
      },

      [`${StyledRadioGroupIndicator.toString()}`]: {
        backgroundColor: "$$indicatorColor",
        display: "flex",
      },
    },

    "&:disabled, &[disabled], &[aria-disabled=true]": {
      $$boxShadow: "0 0 0 1px $$borderColorDisabled",

      '&[data-state="unchecked"]': {
        backgroundColor: "$$backgroundColorUncheckedDisabled",
      },

      '&[data-state="checked"]': {
        backgroundColor: "$$backgroundColorCheckedDisabled",
      },

      [`${StyledRadioGroupIndicator.toString()}`]: {
        backgroundColor: "$$indicatorColorDisabled",
        display: "flex",
      },
    },
  },

  variants: {
    color: {
      unstyled: {
        $$backgroundColorUncheckedNormal:
          "$colors-radio--unstyled--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-radio--unstyled--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-radio--unstyled--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-radio--unstyled--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-radio--unstyled--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-radio--unstyled--background-color--checked--disabled",
        $$borderColorChecked: "$colors-radio--unstyled--border-color--checked",
        $$borderColorNormal: "$colors-radio--unstyled--border-color--normal",
        $$borderColorHover: "$colors-radio--unstyled--border-color--hover",
        $$borderColorFocus: "$colors-radio--unstyled--border-color--focus",
        $$borderColorDisabled:
          "$colors-radio--unstyled--border-color--disabled",
        $$indicatorColor: "$colors-radio--unstyled--indicator--color",
        $$indicatorColorDisabled:
          "$colors-radio--unstyled--indicator--color--disabled",
      },
      primary: {
        $$backgroundColorUncheckedNormal:
          "$colors-radio--primary--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-radio--primary--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-radio--primary--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-radio--primary--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-radio--primary--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-radio--primary--background-color--checked--disabled",
        $$borderColorChecked: "$colors-radio--primary--border-color--checked",
        $$borderColorNormal: "$colors-radio--primary--border-color--normal",
        $$borderColorHover: "$colors-radio--primary--border-color--hover",
        $$borderColorFocus: "$colors-radio--primary--border-color--focus",
        $$borderColorDisabled: "$colors-radio--primary--border-color--disabled",
        $$indicatorColor: "$colors-radio--primary--indicator--color",
        $$indicatorColorDisabled:
          "$colors-radio--primary--indicator--color--disabled",
      },
      secondary: {
        $$backgroundColorUncheckedNormal:
          "$colors-radio--secondary--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-radio--secondary--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-radio--secondary--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-radio--secondary--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-radio--secondary--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-radio--secondary--background-color--checked--disabled",
        $$borderColorChecked: "$colors-radio--secondary--border-color--checked",
        $$borderColorNormal: "$colors-radio--secondary--border-color--normal",
        $$borderColorHover: "$colors-radio--secondary--border-color--hover",
        $$borderColorFocus: "$colors-radio--secondary--border-color--focus",
        $$borderColorDisabled:
          "$colors-radio--secondary--border-color--disabled",
        $$indicatorColor: "$colors-radio--secondary--indicator--color",
        $$indicatorColorDisabled:
          "$colors-radio--secondary--indicator--color--disabled",
      },
      accent: {
        $$backgroundColorUncheckedNormal:
          "$colors-radio--accent--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-radio--accent--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-radio--accent--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-radio--accent--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-radio--accent--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-radio--accent--background-color--checked--disabled",
        $$borderColorChecked: "$colors-radio--accent--border-color--checked",
        $$borderColorNormal: "$colors-radio--accent--border-color--normal",
        $$borderColorHover: "$colors-radio--accent--border-color--hover",
        $$borderColorFocus: "$colors-radio--accent--border-color--focus",
        $$borderColorDisabled: "$colors-radio--accent--border-color--disabled",
        $$indicatorColor: "$colors-radio--accent--indicator--color",
        $$indicatorColorDisabled:
          "$colors-radio--accent--indicator--color--disabled",
      },
      error: {
        $$backgroundColorUncheckedNormal:
          "$colors-radio--error--background-color--unchecked--normal",
        $$backgroundColorUncheckedHover:
          "$colors-radio--error--background-color--unchecked--hover",
        $$backgroundColorUncheckedFocus:
          "$colors-radio--error--background-color--unchecked--focus",
        $$backgroundColorChecked:
          "$colors-radio--error--background-color--checked",
        $$backgroundColorUncheckedDisabled:
          "$colors-radio--error--background-color--unchecked--disabled",
        $$backgroundColorCheckedDisabled:
          "$colors-radio--error--background-color--checked--disabled",
        $$borderColorChecked: "$colors-radio--error--border-color--checked",
        $$borderColorNormal: "$colors-radio--error--border-color--normal",
        $$borderColorHover: "$colors-radio--error--border-color--hover",
        $$borderColorFocus: "$colors-radio--error--border-color--focus",
        $$borderColorDisabled: "$colors-radio--error--border-color--disabled",
        $$indicatorColor: "$colors-radio--error--indicator--color",
        $$indicatorColorDisabled:
          "$colors-radio--error--indicator--color--disabled",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});

const StyledRadioGroupLabel = styled(Label, {
  alignItems: "center",
  cursor: "default",
  display: "inline-flex",
  flex: 1,
  transition: "color 200ms cubic-bezier(0.87, 0, 0.13, 1)",
});
StyledRadioGroupLabel.toString = () => `.${StyledRadioGroupLabel.className}`;

const StyledRadioGroupContainer = styled(Flex, {
  [`&:has(${StyledRadioGroupItem.toString()}:disabled),
    &:has(${StyledRadioGroupItem.toString()}[disabled]),
    &:has(${StyledRadioGroupItem.toString()}[aria-disabled=true])`]: {
    [`${StyledRadioGroupLabel.toString()}`]: {
      color: "$gray-80 !important",
    },
  },
});

export {
  StyledRadioGroupRoot,
  StyledRadioGroupItem,
  StyledRadioGroupIndicator,
  StyledRadioGroupContainer,
  StyledRadioGroupLabel,
};
