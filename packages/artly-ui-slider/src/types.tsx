import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledSlider } from "./styles";

export type SliderProps = HTMLArtlyProps<typeof StyledSlider> &
  ArtlyVariants<typeof StyledSlider>;
