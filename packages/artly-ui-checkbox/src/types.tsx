import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { FlexProps } from "@artly-ui/flex";
import { LabelProps } from "@artly-ui/label";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { Dispatch, SetStateAction } from "react";
import { StyledCheckboxRoot } from "./styles";

export type CheckboxProps = HTMLArtlyProps<typeof StyledCheckboxRoot> &
  ArtlyVariants<typeof StyledCheckboxRoot> &
  CheckboxPrimitives.CheckboxProps;

export type CheckboxContainerProps = FlexProps;

export type CheckboxLabelProps = LabelProps;

export type CheckboxContextState = {
  disabled: boolean;
};

export type CheckboxContextType = {
  state: CheckboxContextState;
  setState: Dispatch<SetStateAction<CheckboxContextState>>;
};
