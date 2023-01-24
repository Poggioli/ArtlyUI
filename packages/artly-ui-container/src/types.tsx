import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledContainer } from "./styles";

export type ContainerProps = HTMLArtlyProps<typeof StyledContainer> &
  ArtlyVariants<typeof StyledContainer>;
