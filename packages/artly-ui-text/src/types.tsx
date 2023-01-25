import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledText } from "./styles";

export type TextProps = HTMLArtlyProps<"span"> &
  ArtlyVariants<typeof StyledText> & {
    color?: string;
    htmlFor?: string;
  };
