import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledPopover } from "./styles";

export type PopoverProps = HTMLArtlyProps<typeof StyledPopover> &
  ArtlyVariants<typeof StyledPopover>;
