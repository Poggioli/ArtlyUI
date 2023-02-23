import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledInput } from "./styles";

export type InputProps = HTMLArtlyProps<typeof StyledInput> &
  ArtlyVariants<typeof StyledInput>;
