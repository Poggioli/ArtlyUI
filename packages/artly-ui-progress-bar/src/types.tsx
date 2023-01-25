import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import * as ProgressPrimitives from "@radix-ui/react-progress";
import { StyledProgressIndicator, StyledProgressRoot } from "./styles";

export type ProgressBarProps = HTMLArtlyProps<typeof StyledProgressRoot> &
  ArtlyVariants<typeof StyledProgressRoot> &
  ArtlyVariants<typeof StyledProgressIndicator> &
  ProgressPrimitives.ProgressProps &
  ProgressPrimitives.ProgressIndicatorProps;
