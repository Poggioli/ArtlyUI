import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { ReactNode } from "react";
import { StyledButton } from "./styles";

export type ButtonProps = HTMLArtlyProps<"button"> &
  ArtlyVariants<typeof StyledButton> & { icon?: ReactNode };
