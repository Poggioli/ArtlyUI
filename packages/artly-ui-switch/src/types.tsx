import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { FlexProps } from "@artly-ui/flex";
import { LabelProps } from "@artly-ui/label";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { Dispatch, SetStateAction } from "react";
import { StyledSwitchRoot } from "./styles";

export type SwitchProps = HTMLArtlyProps<typeof StyledSwitchRoot> &
  ArtlyVariants<typeof StyledSwitchRoot> &
  SwitchPrimitives.SwitchProps &
  SwitchPrimitives.SwitchThumbProps;

export type SwitchLabelProps = LabelProps;

export type SwitchContainerProps = FlexProps;

export type SwitchContextState = {
  disabled: boolean;
};

export type SwitchContextType = {
  state: SwitchContextState;
  setState: Dispatch<SetStateAction<SwitchContextState>>;
};
