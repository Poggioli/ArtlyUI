import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { ReactNode } from "react";
import { StyledInput } from "./styles";

export type InputProps = HTMLArtlyProps<"input"> &
  ArtlyVariants<typeof StyledInput> & {
    label: string;
    prefix?: ReactNode;
    sufix?: ReactNode;
  };
