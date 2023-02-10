import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledCard } from "./styles";

export type CardProps = HTMLArtlyProps<typeof StyledCard> &
  ArtlyVariants<typeof StyledCard>;
