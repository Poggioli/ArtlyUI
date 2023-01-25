import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import * as SeparatorPrimitives from "@radix-ui/react-separator";
import { StyledSeparator } from "./styles";

export type SeparatorProps = HTMLArtlyProps<typeof StyledSeparator> &
  ArtlyVariants<typeof StyledSeparator> &
  SeparatorPrimitives.SeparatorProps;
