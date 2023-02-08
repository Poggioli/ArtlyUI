import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { ReactNode } from "react";
import { StyledTag } from "./styles";

export type TagProps = HTMLArtlyProps<typeof StyledTag> &
  ArtlyVariants<typeof StyledTag> & {
    icon?: ReactNode;
  };
