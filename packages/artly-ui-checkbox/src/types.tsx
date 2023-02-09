import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledCheckbox } from "./styles";

export type CheckboxProps = HTMLArtlyProps<typeof StyledCheckbox> &
  ArtlyVariants<typeof StyledCheckbox>;
