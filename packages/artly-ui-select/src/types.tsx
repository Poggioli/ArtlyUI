import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { SeparatorProps } from "@artly-ui/separator";
import * as SelectPrimitives from "@radix-ui/react-select";
import { Dispatch, SetStateAction } from "react";
import {
  StyledSelectArrow,
  StyledSelectContent,
  StyledSelectGroup,
  StyledSelectIcon,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectLabel,
  StyledSelectPortal,
  StyledSelectRoot,
  StyledSelectScrollDownButton,
  StyledSelectScrollUpButton,
  StyledSelectSeparator,
  StyledSelectTrigger,
  StyledSelectValue,
  StyledSelectViewPort,
} from "./styles";

export type SelectProps = HTMLArtlyProps<typeof StyledSelectRoot> &
  ArtlyVariants<typeof StyledSelectRoot> &
  SelectPrimitives.SelectProps &
  Pick<SelectItemProps, "color"> &
  Pick<SelectTriggerProps, "shape">;

export type SelectTriggerProps = HTMLArtlyProps<typeof StyledSelectTrigger> &
  Omit<ArtlyVariants<typeof StyledSelectTrigger>, "color" | "shape"> &
  SelectPrimitives.SelectTriggerProps;

export type SelectValueProps = HTMLArtlyProps<typeof StyledSelectValue> &
  ArtlyVariants<typeof StyledSelectValue> &
  SelectPrimitives.SelectValueProps;

export type SelectIconProps = HTMLArtlyProps<typeof StyledSelectIcon> &
  ArtlyVariants<typeof StyledSelectIcon> &
  SelectPrimitives.SelectIconProps;

export type SelectPortalProps = HTMLArtlyProps<typeof StyledSelectPortal> &
  ArtlyVariants<typeof StyledSelectPortal> &
  SelectPrimitives.SelectPortalProps;

export type SelectContentProps = HTMLArtlyProps<typeof StyledSelectContent> &
  ArtlyVariants<typeof StyledSelectContent> &
  SelectPrimitives.SelectContentProps;

export type SelectViewPortProps = HTMLArtlyProps<typeof StyledSelectViewPort> &
  ArtlyVariants<typeof StyledSelectViewPort> &
  SelectPrimitives.SelectViewportProps;

export type SelectItemProps = HTMLArtlyProps<typeof StyledSelectItem> &
  Omit<ArtlyVariants<typeof StyledSelectItem>, "color"> &
  SelectPrimitives.SelectItemProps;

export type SelectItemTextProps = HTMLArtlyProps<typeof StyledSelectItemText> &
  ArtlyVariants<typeof StyledSelectItemText> &
  SelectPrimitives.SelectItemTextProps;

export type SelectItemIndicatorProps = HTMLArtlyProps<
  typeof StyledSelectItemIndicator
> &
  ArtlyVariants<typeof StyledSelectItemIndicator> &
  SelectPrimitives.SelectItemIndicatorProps;

export type SelectScrollUpButtonProps = HTMLArtlyProps<
  typeof StyledSelectScrollUpButton
> &
  Omit<ArtlyVariants<typeof StyledSelectScrollUpButton>, "color"> &
  SelectPrimitives.SelectScrollUpButtonProps;

export type SelectScrollDownButtonProps = HTMLArtlyProps<
  typeof StyledSelectScrollDownButton
> &
  Omit<ArtlyVariants<typeof StyledSelectScrollDownButton>, "color"> &
  SelectPrimitives.SelectScrollDownButtonProps;

export type SelectGroupProps = HTMLArtlyProps<typeof StyledSelectGroup> &
  ArtlyVariants<typeof StyledSelectGroup> &
  SelectPrimitives.SelectGroupProps;

export type SelectLabelProps = HTMLArtlyProps<typeof StyledSelectLabel> &
  ArtlyVariants<typeof StyledSelectLabel> &
  SelectPrimitives.SelectLabelProps;

export type SelectSeparatorProps = HTMLArtlyProps<
  typeof StyledSelectSeparator
> &
  ArtlyVariants<typeof StyledSelectSeparator> &
  SelectPrimitives.SelectSeparatorProps &
  SeparatorProps;

export type SelectArrowProps = HTMLArtlyProps<typeof StyledSelectArrow> &
  ArtlyVariants<typeof StyledSelectArrow> &
  SelectPrimitives.SelectArrowProps;

export type SelectContextState = {
  color?: any;
  shape?: any;
  value?: string;
};

export type SelectContextType = {
  state: SelectContextState;
  setState: Dispatch<SetStateAction<SelectContextState>>;
};
