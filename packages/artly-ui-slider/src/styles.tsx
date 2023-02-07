import { styled } from "@artly-ui/core";
import * as SliderPrimivites from "@radix-ui/react-slider";

const StyledSliderRange = styled(SliderPrimivites.Range, {
  borderRadius: "$4",
  position: "absolute",
  transition: "background-color 200ms linear",

  '&[data-orientation="horizontal"]': {
    height: "100%",
  },

  '&[data-orientation="vertical"]': {
    width: "100%",
  },
});
StyledSliderRange.toString = () => `.${StyledSliderRange.className}`;

const StyledSliderTrack = styled(SliderPrimivites.Track, {
  borderRadius: "$4",
  flexGrow: 1,
  position: "relative",
  transition: "background-color 200ms linear",

  '&[data-orientation="horizontal"]': {
    height: "$2",
  },

  '&[data-orientation="vertical"]': {
    width: "$2",
  },
});
StyledSliderTrack.toString = () => `.${StyledSliderTrack.className}`;

const StyledSliderThumb = styled(SliderPrimivites.Thumb, {
  borderRadius: "$4",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  display: "block",
  height: "$4",
  transition: "background-color 200ms linear, transform 200ms linear",
  width: "$4",

  "&:hover": {
    transform: "scale(1.125)",
  },

  "&:focus": {
    outline: "none",
  },
});
StyledSliderThumb.toString = () => `.${StyledSliderThumb.className}`;

const StyledSliderRoot = styled(SliderPrimivites.Root, {
  alignItems: "center",
  display: "flex",
  position: "relative",
  touchAction: "none",
  userSelect: "none",

  '&[data-orientation="horizontal"]': {
    height: "$5",
    width: "100%",
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    height: "100%",
    width: "$5",
  },

  [`${StyledSliderTrack.toString()}`]: {
    backgroundColor: "$$backgroundColorTrackNormal",
  },

  [`${StyledSliderRange.toString()}`]: {
    backgroundColor: "$$backgroundColorRangeNormal",
  },

  [`${StyledSliderThumb.toString()}`]: {
    backgroundColor: "$$backgroundColorThumbNormal",
  },

  "&:hover": {
    [`${StyledSliderRange.toString()}`]: {
      backgroundColor: "$$backgroundColorRangeHover",
    },

    [`${StyledSliderThumb.toString()}`]: {
      backgroundColor: "$$backgroundColorThumbHover",
    },
  },

  [`&:has(${StyledSliderThumb.toString()}:focus)`]: {
    [`${StyledSliderRange.toString()}`]: {
      backgroundColor: "$$backgroundColorRangeFocus",
    },

    [`${StyledSliderThumb.toString()}`]: {
      backgroundColor: "$$backgroundColorThumbFocus",
      "&:focus": {
        transform: "scale(1.125)",
      },
    },
  },

  "&:disabled, &[data-disabled=true], &[aria-disabled=true]": {
    [`${StyledSliderTrack.toString()}`]: {
      backgroundColor: "$$backgroundColorTrackDisabled",
    },

    [`${StyledSliderRange.toString()}`]: {
      backgroundColor: "$$backgroundColorRangeDisabled",
    },

    [`${StyledSliderThumb.toString()}`]: {
      backgroundColor: "$$backgroundColorThumbDisabled",
      boxShadow: "none",
    },
  },

  variants: {
    color: {
      primary: {
        $$backgroundColorTrackNormal:
          "$colors-slider--track--primary--background-color--normal",
        $$backgroundColorTrackDisabled:
          "$colors-slider--track--primary--background-color--disabled",
        $$backgroundColorRangeNormal:
          "$colors-slider--range--primary--background-color--normal",
        $$backgroundColorRangeHover:
          "$colors-slider--range--primary--background-color--hover",
        $$backgroundColorRangeFocus:
          "$colors-slider--range--primary--background-color--focus",
        $$backgroundColorRangeDisabled:
          "$colors-slider--range--primary--background-color--disabled",
        $$backgroundColorThumbNormal:
          "$colors-slider--thumb--primary--background-color--normal",
        $$backgroundColorThumbHover:
          "$colors-slider--thumb--primary--background-color--hover",
        $$backgroundColorThumbFocus:
          "$colors-slider--thumb--primary--background-color--focus",
        $$backgroundColorThumbDisabled:
          "$colors-slider--thumb--primary--background-color--disabled",
      },
      unstyled: {
        $$backgroundColorTrackNormal:
          "$colors-slider--track--unstyled--background-color--normal",
        $$backgroundColorTrackDisabled:
          "$colors-slider--track--unstyled--background-color--disabled",
        $$backgroundColorRangeNormal:
          "$colors-slider--range--unstyled--background-color--normal",
        $$backgroundColorRangeHover:
          "$colors-slider--range--unstyled--background-color--hover",
        $$backgroundColorRangeFocus:
          "$colors-slider--range--unstyled--background-color--focus",
        $$backgroundColorRangeDisabled:
          "$colors-slider--range--unstyled--background-color--disabled",
        $$backgroundColorThumbNormal:
          "$colors-slider--thumb--unstyled--background-color--normal",
        $$backgroundColorThumbHover:
          "$colors-slider--thumb--unstyled--background-color--hover",
        $$backgroundColorThumbFocus:
          "$colors-slider--thumb--unstyled--background-color--focus",
        $$backgroundColorThumbDisabled:
          "$colors-slider--thumb--unstyled--background-color--disabled",
      },
      secondary: {
        $$backgroundColorTrackNormal:
          "$colors-slider--track--secondary--background-color--normal",
        $$backgroundColorTrackDisabled:
          "$colors-slider--track--secondary--background-color--disabled",
        $$backgroundColorRangeNormal:
          "$colors-slider--range--secondary--background-color--normal",
        $$backgroundColorRangeHover:
          "$colors-slider--range--secondary--background-color--hover",
        $$backgroundColorRangeFocus:
          "$colors-slider--range--secondary--background-color--focus",
        $$backgroundColorRangeDisabled:
          "$colors-slider--range--secondary--background-color--disabled",
        $$backgroundColorThumbNormal:
          "$colors-slider--thumb--secondary--background-color--normal",
        $$backgroundColorThumbHover:
          "$colors-slider--thumb--secondary--background-color--hover",
        $$backgroundColorThumbFocus:
          "$colors-slider--thumb--secondary--background-color--focus",
        $$backgroundColorThumbDisabled:
          "$colors-slider--thumb--secondary--background-color--disabled",
      },
      accent: {
        $$backgroundColorTrackNormal:
          "$colors-slider--track--accent--background-color--normal",
        $$backgroundColorTrackDisabled:
          "$colors-slider--track--accent--background-color--disabled",
        $$backgroundColorRangeNormal:
          "$colors-slider--range--accent--background-color--normal",
        $$backgroundColorRangeHover:
          "$colors-slider--range--accent--background-color--hover",
        $$backgroundColorRangeFocus:
          "$colors-slider--range--accent--background-color--focus",
        $$backgroundColorRangeDisabled:
          "$colors-slider--range--accent--background-color--disabled",
        $$backgroundColorThumbNormal:
          "$colors-slider--thumb--accent--background-color--normal",
        $$backgroundColorThumbHover:
          "$colors-slider--thumb--accent--background-color--hover",
        $$backgroundColorThumbFocus:
          "$colors-slider--thumb--accent--background-color--focus",
        $$backgroundColorThumbDisabled:
          "$colors-slider--thumb--accent--background-color--disabled",
      },
      error: {
        $$backgroundColorTrackNormal:
          "$colors-slider--track--error--background-color--normal",
        $$backgroundColorTrackDisabled:
          "$colors-slider--track--error--background-color--disabled",
        $$backgroundColorRangeNormal:
          "$colors-slider--range--error--background-color--normal",
        $$backgroundColorRangeHover:
          "$colors-slider--range--error--background-color--hover",
        $$backgroundColorRangeFocus:
          "$colors-slider--range--error--background-color--focus",
        $$backgroundColorRangeDisabled:
          "$colors-slider--range--error--background-color--disabled",
        $$backgroundColorThumbNormal:
          "$colors-slider--thumb--error--background-color--normal",
        $$backgroundColorThumbHover:
          "$colors-slider--thumb--error--background-color--hover",
        $$backgroundColorThumbFocus:
          "$colors-slider--thumb--error--background-color--focus",
        $$backgroundColorThumbDisabled:
          "$colors-slider--thumb--error--background-color--disabled",
      },
    },
  },

  defaultVariants: {
    color: "primary",
  },
});

export {
  StyledSliderRange,
  StyledSliderTrack,
  StyledSliderThumb,
  StyledSliderRoot,
};
