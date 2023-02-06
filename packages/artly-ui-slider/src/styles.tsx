import { styled } from "@artly-ui/core";
import * as SliderPrimivites from "@radix-ui/react-slider";

const StyledSliderRange = styled(SliderPrimivites.Range, {
  borderRadius: "$4",
  height: "100%",
  position: "absolute",
  transition: "background-color 200ms linear",
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
  //   $$boxShadow:
  //     "$colors-black-70 0px 0px 38px 5px, $colors-black-70 0px 5px 20px -15px",
  //   boxShadow: "$$boxShadow",
  display: "block",
  height: "$4",
  transition: "background-color 200ms linear, transform 200ms linear",
  width: "$4",

  "&:hover": {
    // transform: "scale(1.125)",
  },

  "&:focus": {
    // outline: "none",
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
    // backgroundColor: "$$backgroundColorTrackNormal",
  },

  [`${StyledSliderRange.toString()}`]: {
    // backgroundColor: "$$backgroundColorRangeNormal",
  },

  [`${StyledSliderThumb.toString()}`]: {
    // backgroundColor: "$$backgroundColorThumbNormal",
  },

  "&:hover": {
    [`${StyledSliderRange.toString()}`]: {
      //   backgroundColor: "$$backgroundColorRangeHover",
    },

    [`${StyledSliderThumb.toString()}`]: {
      //   backgroundColor: "$$backgroundColorThumbHover",
    },
  },

  [`&:has(${StyledSliderThumb.toString()}:focus)`]: {
    [`${StyledSliderRange.toString()}`]: {
      //   backgroundColor: "$$backgroundColorRangeFocus",
    },

    [`${StyledSliderThumb.toString()}`]: {
      //   backgroundColor: "$$backgroundColorThumbFocus",
      "&:focus": {
        // transform: "scale(1.125)",
      },
    },
  },

  "&:disabled, &[data-disabled=true], &[aria-disabled=true]": {
    [`${StyledSliderTrack.toString()}`]: {
      //   backgroundColor: "$$backgroundColorTrackDisabled",
    },

    [`${StyledSliderRange.toString()}`]: {
      //   backgroundColor: "$$backgroundColorRangeDisabled",
    },

    [`${StyledSliderThumb.toString()}`]: {
      //   backgroundColor: "$$backgroundColorThumbDisabled",
    },
  },

  variants: {
    color: {},
  },

  defaultVariants: {},
});

export {
    StyledSliderRange,
    StyledSliderTrack,
    StyledSliderThumb,
    StyledSliderRoot,
};

