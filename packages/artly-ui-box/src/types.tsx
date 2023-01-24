import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledBox } from "./styles";

export type BoxProps = HTMLArtlyProps<typeof StyledBox> &
  ArtlyVariants<typeof StyledBox>;
