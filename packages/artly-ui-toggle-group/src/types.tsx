import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledToggleGroup } from "./styles";

export type ToggleGroupProps = HTMLArtlyProps<typeof StyledToggleGroup> &
  ArtlyVariants<typeof StyledToggleGroup>;
