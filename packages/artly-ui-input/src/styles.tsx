import { CSS, styled } from "@artly-ui/core";
import { StyledFlex } from "@artly-ui/flex";
import { Label } from "@artly-ui/label";
import { StyledText } from "@artly-ui/text";
import { body1 } from "@artly-ui/tokens";

const hasValueOrHasFocusBase: CSS = {
  maxWidth: "133%",
  transformOrigin: "top left",
  transition: `
    color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms
  `,
};

const hasValueOrHasFocusCSS: CSS = {
  ...hasValueOrHasFocusBase,
  transform: "translate($sizes-3, $sizes-2) scale(0.75)",
};

const hasValueOrHasFocusOutlinedCSS: CSS = {
  ...hasValueOrHasFocusBase,
  transform: "translate($sizes-5, 0) scale(0.75)",
};

const StyledInputLabel = styled(Label, {
  ...body1,
  color: "$$labelColor !important",
  display: "block",
  left: 0,
  maxWidth: "100%",
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  textOverflow: "ellipsis",
  top: 0,
  transformOrigin: "top left",
  transition: `
    color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,
    max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms`,
  whiteSpace: "nowrap",
  zIndex: "$1",

  variants: {
    hasValue: {
      true: {},
    },
    hasFocus: {
      true: {},
    },
    shape: {
      standard: {
        transform: "translate($sizes-3, $sizes-6) scale(1)",
      },
      outlined: {
        transform: "translate($sizes-5, $sizes-5) scale(1)",
      },
    },
  },

  defaultVariants: {
    hasValue: false,
    hasFocus: false,
    shape: "standard",
  },

  compoundVariants: [
    {
      shape: "outlined",
      hasFocus: true,
      css: {
        ...hasValueOrHasFocusOutlinedCSS,
      },
    },
    {
      shape: "outlined",
      hasValue: true,
      css: {
        ...hasValueOrHasFocusOutlinedCSS,
      },
    },
    {
      shape: "standard",
      hasFocus: true,
      css: {
        ...hasValueOrHasFocusCSS,
      },
    },
    {
      shape: "standard",
      hasValue: true,
      css: {
        ...hasValueOrHasFocusCSS,
      },
    },
  ],
});
StyledInputLabel.toString = () => `.${StyledInputLabel.className}`;

const StyledLegendSpan = styled(StyledText, {
  display: "inline-block",
  opacity: 0,
  paddingLeft: "$3",
  paddingRight: "$2",
  visibility: "visible",
  whiteSpace: "nowrap",
});
StyledLegendSpan.toString = () => `.${StyledLegendSpan.className}`;

const StyledFieldSet = styled("fieldset", {
  borderColor: "$$borderColor",
  borderRadius: "inherit",
  inset: "$1 0 0",
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  transition:
    "border-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",

  variants: {
    shape: {
      standard: {
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
      },

      outlined: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "$2",
        paddingLeft: "calc($3 + $2)",
      },
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
  maxWidth: 0,
  overflow: "hidden",
  transition: "max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
  width: "auto",

  variants: {
    hasValue: {
      true: {
        maxWidth: "100%",
        transition: "max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",
      },
    },
  },

  defaultVariants: {
    hasValue: false,
  },
});
StyledLegend.toString = () => `.${StyledLegend.className}`;

const StyledInput = styled("input", {
  all: "unset",
  textAlign: "left",
  width: "100%",
  ...body1,
  color: "$$textColorNormal",

  "&:disabled": {
    borderColor: "$$borderColorDisabled",
    color: "$$textColorDisabled",
  },

  "&:disabled, &:disabled *": {
    color: "$$textColorDisabled",
  },

  variants: {
    shape: {
      standard: {
        padding: "$6 $3 $3 $3",
      },

      outlined: {
        padding: "$5 $3 calc($3 + $2) $5",
      },
    },
    color: {
      unstyled: {
        $$textColorNormal: "$colors-input--unstyled--text--color-normal",
        $$textColorDisabled: "$colors-input--unstyled--text--color-disabled",
      },
      primary: {
        $$textColorNormal: "$colors-input--unstyled--text--color-normal",
        $$textColorDisabled: "$colors-input--unstyled--text--color-disabled",
      },
      secondary: {
        $$textColorNormal: "$colors-input--secondary--text--color-normal",
        $$textColorDisabled: "$colors-input--secondary--text--color-disabled",
      },
      accent: {
        $$textColorNormal: "$colors-input--accent--text--color-normal",
        $$textColorDisabled: "$colors-input--accent--text--color-disabled",
      },
      error: {
        $$textColorNormal: "$colors-input--error--text--color-normal",
        $$textColorDisabled: "$colors-input--error--text--color-disabled",
      },
    },
  },

  defaultVariants: {
    shape: "standard",
    color: "unstyled",
  },
});
StyledInput.toString = () => `.${StyledInput.className}`;

const StyledFlexContainerInput = styled(StyledFlex, {
  position: "relative",
  width: "100%",
});

const StyledFlexContainer = styled(StyledFlex, {
  position: "relative",
  $$borderColor: "$$borderColorNormal",
  $$labelColor: "$$labelColorNormal",

  [`&:has(${StyledInput.toString()}:hover)`]: {
    $$borderColor: "$$borderColorHover",
  },

  [`&:has(${StyledInput.toString()}:focus)`]: {
    $$borderColor: "$$borderColorFocus",
    $$labelColor: "$$labelColorFocus",
  },

  [`&:has(${StyledInput.toString()}:disabled)`]: {
    $$borderColor: "$$borderColorDisabled",
    $$labelColor: "$$labelColorDisabled",
  },

  variants: {
    color: {
      unstyled: {
        $$borderColorNormal: "$colors-input--unstyled--border-color-normal",
        $$borderColorHover: "$colors-input--unstyled--border-color-hover",
        $$borderColorFocus: "$colors-input--unstyled--border-color-focus",
        $$borderColorDisabled: "$colors-input--unstyled--border-color-disabled",
        $$labelColorNormal: "$colors-input--unstyled--label--color-normal",
        $$labelColorFocus: "$colors-input--unstyled--label--color-focus",
        $$labelColorDisabled: "$colors-input--unstyled--label--color-disabled",
      },
      primary: {
        $$borderColorNormal: "$colors-input--primary--border-color-normal",
        $$borderColorHover: "$colors-input--primary--border-color-hover",
        $$borderColorFocus: "$colors-input--primary--border-color-focus",
        $$borderColorDisabled: "$colors-input--primary--border-color-disabled",
        $$labelColorNormal: "$colors-input--primary--label--color-normal",
        $$labelColorFocus: "$colors-input--primary--label--color-focus",
        $$labelColorDisabled: "$colors-input--primary--label--color-disabled",
      },
      secondary: {
        $$borderColorNormal: "$colors-input--secondary--border-color-normal",
        $$borderColorHover: "$colors-input--secondary--border-color-hover",
        $$borderColorFocus: "$colors-input--secondary--border-color-focus",
        $$borderColorDisabled:
          "$colors-input--secondary--border-color-disabled",
        $$labelColorNormal: "$colors-input--secondary--label--color-normal",
        $$labelColorFocus: "$colors-input--secondary--label--color-focus",
        $$labelColorDisabled: "$colors-input--secondary--label--color-disabled",
      },
      accent: {
        $$borderColorNormal: "$colors-input--accent--border-color-normal",
        $$borderColorHover: "$colors-input--accent--border-color-hover",
        $$borderColorFocus: "$colors-input--accent--border-color-focus",
        $$borderColorDisabled: "$colors-input--accent--border-color-disabled",
        $$labelColorNormal: "$colors-input--accent--label--color-normal",
        $$labelColorFocus: "$colors-input--accent--label--color-focus",
        $$labelColorDisabled: "$colors-input--accent--label--color-disabled",
      },
      error: {
        $$borderColorNormal: "$colors-input--error--border-color-normal",
        $$borderColorHover: "$colors-input--error--border-color-hover",
        $$borderColorFocus: "$colors-input--error--border-color-focus",
        $$borderColorDisabled: "$colors-input--error--border-color-disabled",
        $$labelColorNormal: "$colors-input--error--label--color-normal",
        $$labelColorFocus: "$colors-input--error--label--color-focus",
        $$labelColorDisabled: "$colors-input--error--label--color-disabled",
      },
    },
  },

  defaultVariants: {
    color: "unstyled",
  },
});

export {
  StyledInput,
  StyledLegendSpan,
  StyledFieldSet,
  StyledLegend,
  StyledFlexContainer,
  StyledFlexContainerInput,
  StyledInputLabel,
};
