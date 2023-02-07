import { forwardRef } from "@artly-ui/core";
import {
  StyledSliderRange,
  StyledSliderRoot,
  StyledSliderThumb,
  StyledSliderTrack,
} from "./styles";
import { SliderProps, SliderThumbProps } from "./types";

// ------------------------------------------- Slider Thumb ------------------------------------------- //

const SliderThumb = forwardRef<typeof StyledSliderThumb, SliderThumbProps>(
  ({ ...props }, forwardedRef) => (
    <StyledSliderThumb {...props} ref={forwardedRef} />
  )
);

// ------------------------------------------- Slider Root ------------------------------------------- //

const Slider = forwardRef<typeof StyledSliderRoot, SliderProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledSliderRoot {...props} ref={forwardedRef}>
        <StyledSliderTrack>
          <StyledSliderRange />
        </StyledSliderTrack>
        {children}
      </StyledSliderRoot>
    );
  }
);

export { Slider, SliderThumb };
