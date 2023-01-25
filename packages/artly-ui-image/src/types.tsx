import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import * as AspectRatioPrimitives from "@radix-ui/react-aspect-ratio";
import { StyledImage } from "./styles";

export type ImageProps = HTMLArtlyProps<typeof StyledImage> &
  ArtlyVariants<typeof StyledImage> &
  AspectRatioPrimitives.AspectRatioProps;
