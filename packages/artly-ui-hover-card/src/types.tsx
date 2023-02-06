import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledHoverCard } from "./styles";

export type HoverCardProps = HTMLArtlyProps<typeof StyledHoverCard> &
  ArtlyVariants<typeof StyledHoverCard>;
