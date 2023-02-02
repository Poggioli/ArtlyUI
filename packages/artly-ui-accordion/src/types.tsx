import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { StyledAccordion } from "./styles";

export type AccordionProps = HTMLArtlyProps<typeof StyledAccordion> &
  ArtlyVariants<typeof StyledAccordion>;
