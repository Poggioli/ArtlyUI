import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import * as SliderPrimivites from "@radix-ui/react-slider";
import { StyledSliderRoot } from "./styles";

export type SliderProps = HTMLArtlyProps<typeof StyledSliderRoot> &
  ArtlyVariants<typeof StyledSliderRoot> &
  SliderPrimivites.SliderProps &
  SliderPrimivites.SliderTrackProps &
  SliderPrimivites.SliderRangeProps;

export type SliderThumbProps = SliderPrimivites.SliderThumbProps;
