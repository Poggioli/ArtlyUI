import { ArtlyVariants, CSS, HTMLArtlyProps } from "@artly-ui/core";
import { StyledFlex } from "./styles";

export type FlexProps = HTMLArtlyProps<typeof StyledFlex> &
  ArtlyVariants<typeof StyledFlex> & {
    direction?: CSS["flexDirection"];
    align?: CSS["alignItems"];
    justify?: CSS["justifyContent"];
    wrap?: CSS["flexWrap"];
    templateColumns?: CSS["gridTemplateColumns"];
    templateRows?: CSS["gridTemplateRows"];
    gap?: CSS["gap"];
    gapX?: CSS["columnGap"];
    gapY?: CSS["rowGap"];
  };
