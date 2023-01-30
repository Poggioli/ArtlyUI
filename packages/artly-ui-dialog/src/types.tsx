import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledDialog } from "./styles";

export type DialogProps = HTMLArtlyProps<typeof StyledDialog> &
  ArtlyVariants<typeof StyledDialog>;
