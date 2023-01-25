import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledHeading } from "./styles";

export type HeadingProps = HTMLArtlyProps<typeof StyledHeading> &
  ArtlyVariants<typeof StyledHeading> & {
    color?: string;
  };
