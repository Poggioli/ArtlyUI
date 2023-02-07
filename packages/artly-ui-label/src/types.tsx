import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledLabel } from "./styles";

export type LabelProps = HTMLArtlyProps<typeof StyledLabel> &
  ArtlyVariants<typeof StyledLabel> & {
    color?: string;
  };
