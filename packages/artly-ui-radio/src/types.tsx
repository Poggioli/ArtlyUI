import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledRadio } from "./styles";

export type RadioProps = HTMLArtlyProps<typeof StyledRadio> &
  ArtlyVariants<typeof StyledRadio>;
