import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledBadge } from "./styles";

export type BadgeProps = HTMLArtlyProps<typeof StyledBadge> &
  ArtlyVariants<typeof StyledBadge> & {
    count: number,
    maxCount?: number,
    showZero?: boolean,
  };
