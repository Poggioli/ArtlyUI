import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledTag } from "./styles";

export type TagProps = HTMLArtlyProps<typeof StyledTag> &
  ArtlyVariants<typeof StyledTag>;
