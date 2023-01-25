import { ArtlyVariants } from "@artly-ui/core";
import * as ScrollAreaPrimitives from "@radix-ui/react-scroll-area";
import {
  StyledScrollAreaCorner,
  StyledScrollAreaRoot,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaViewport,
} from "./styles";

export type ScrollBarProps = ScrollAreaPrimitives.ScrollAreaScrollbarProps &
  ScrollAreaPrimitives.ScrollAreaThumbProps &
  ArtlyVariants<typeof StyledScrollAreaScrollbar> &
  ArtlyVariants<typeof StyledScrollAreaThumb>;

export type ScrollAreaProps = ScrollAreaPrimitives.ScrollAreaProps &
  ScrollAreaPrimitives.ScrollAreaViewportProps &
  ScrollAreaPrimitives.ScrollAreaCornerProps &
  ScrollBarProps &
  ArtlyVariants<typeof StyledScrollAreaRoot> &
  ArtlyVariants<typeof StyledScrollAreaViewport> &
  ArtlyVariants<typeof StyledScrollAreaCorner>;

export enum ScrollAreaOrientation {
  VERTICAL = "vertical",
  HORIZONTAL = "horizontal",
}
