import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { FlexProps } from "@artly-ui/flex";
import { LabelProps } from "@artly-ui/label";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import { StyledRadioGroupItem, StyledRadioGroupRoot } from "./styles";

export type RadioItemProps = HTMLArtlyProps<typeof StyledRadioGroupItem> &
  ArtlyVariants<typeof StyledRadioGroupItem> &
  RadioGroupPrimitives.RadioGroupItemProps;

export type RadioProps = HTMLArtlyProps<typeof StyledRadioGroupRoot> &
  ArtlyVariants<typeof StyledRadioGroupRoot> &
  RadioGroupPrimitives.RadioGroupProps;

export type RadioContainerProps = FlexProps;

export type RadioLabelProps = LabelProps;
