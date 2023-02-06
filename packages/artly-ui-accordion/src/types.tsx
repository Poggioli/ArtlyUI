import { ButtonProps } from "@artly-ui/button";
import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { HeadingProps } from "@artly-ui/heading";
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { Dispatch, SetStateAction } from "react";
import { StyledAccordionRoot } from "./styles";

type AccordionTypeProps =
  | AccordionPrimitives.AccordionSingleProps
  | AccordionPrimitives.AccordionMultipleProps;

export type AccordionProps = HTMLArtlyProps<typeof StyledAccordionRoot> &
  ArtlyVariants<typeof StyledAccordionRoot> &
  AccordionTypeProps;

export type AccordionHeaderProps = AccordionPrimitives.AccordionHeaderProps;

export type AccordionTriggerProps = AccordionPrimitives.AccordionTriggerProps;

export type AccordionChevronProps = ButtonProps;

export type AccordionContentProps =
  AccordionPrimitives.AccordionContentProps & {
    padded?: boolean;
  };

export type AccordionItemProps = AccordionPrimitives.AccordionItemProps;

export type AccordionHeaderTitleProps = HeadingProps;

export type AccordionContextState = {
  disabled: boolean;
};

export type AccordionItemContextState = {
  disabled: boolean;
};

export type AccordionContextType = {
  state: AccordionContextState;
  setState: Dispatch<SetStateAction<AccordionContextState>>;
};

export type AccordionItemContextType = {
  state: AccordionItemContextState;
  setState: Dispatch<SetStateAction<AccordionItemContextState>>;
};
