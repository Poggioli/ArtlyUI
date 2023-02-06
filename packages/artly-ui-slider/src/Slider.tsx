import { forwardRef } from "@artly-ui/core";
import { StyledSlider } from "./styles";
import { SliderProps } from "./types";

const Slider = forwardRef<typeof StyledSlider, SliderProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSlider {...props} ref={forwardedRef} />;
  }
);

export { Slider };
