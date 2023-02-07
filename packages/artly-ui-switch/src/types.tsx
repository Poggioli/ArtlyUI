import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { FlexProps } from "@artly-ui/flex";
import { TextProps } from "@artly-ui/text";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Dispatch, SetStateAction } from "react";
import { StyledSwitchRoot } from "./styles";

export type SwitchProps = HTMLArtlyProps<typeof StyledSwitchRoot> &
  ArtlyVariants<typeof StyledSwitchRoot> &
  SwitchPrimitives.SwitchProps &
  SwitchPrimitives.SwitchThumbProps;

export type SwitchLabelProps = TextProps;

export type SwitchContainerProps = FlexProps;

export type SwitchContextState = {
  disabled: boolean;
};

export type SwitchContextType = {
  state: SwitchContextState;
  setState: Dispatch<SetStateAction<SwitchContextState>>;
};