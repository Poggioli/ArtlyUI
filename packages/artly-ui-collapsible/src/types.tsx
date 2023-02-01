import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledCollapsible } from "./styles";

export type CollapsibleProps = HTMLArtlyProps<typeof StyledCollapsible> &
  ArtlyVariants<typeof StyledCollapsible>;
