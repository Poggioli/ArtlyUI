import { ArtlyVariants } from "@artly-ui/core";
import { ImageProps } from "@artly-ui/image";
import * as AvatarPrimitives from "@radix-ui/react-avatar";
import {
  StyledAvatarFallback,
  StyledAvatarImage,
  StyledAvatarRoot,
} from "./styles";

export type AvatarProps = AvatarPrimitives.AvatarProps &
  AvatarPrimitives.AvatarImageProps &
  AvatarPrimitives.AvatarFallbackProps &
  ArtlyVariants<typeof StyledAvatarRoot> &
  ArtlyVariants<typeof StyledAvatarImage> &
  ArtlyVariants<typeof StyledAvatarFallback> &
  ImageProps;
