import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledAlertDialog } from "./styles";

export type AlertDialogProps = HTMLArtlyProps<typeof StyledAlertDialog> &
  ArtlyVariants<typeof StyledAlertDialog>;
