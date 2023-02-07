import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledSwitch } from "./styles";

export type SwitchProps = HTMLArtlyProps<typeof StyledSwitch> &
  ArtlyVariants<typeof StyledSwitch>;
