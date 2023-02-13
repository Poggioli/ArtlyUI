import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledSelect } from "./styles";

export type SelectProps = HTMLArtlyProps<typeof StyledSelect> &
  ArtlyVariants<typeof StyledSelect>;
