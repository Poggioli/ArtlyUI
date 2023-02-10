import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { FlexProps } from "@artly-ui/flex";
import { LabelProps } from "@artly-ui/label";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { Dispatch, SetStateAction } from "react";
import { StyledCheckboxRoot } from "./styles";

export type CheckboxProps = HTMLArtlyProps<typeof StyledCheckboxRoot> &
  ArtlyVariants<typeof StyledCheckboxRoot> &
  CheckboxPrimitives.CheckboxProps & {
    value: string;
  };

export type CheckboxContainerProps = FlexProps;

export type CheckboxLabelProps = LabelProps;

export type CheckboxContextState = {
  disabled: boolean;
};

export type CheckboxContextType = {
  state: CheckboxContextState;
  setState: Dispatch<SetStateAction<CheckboxContextState>>;
};

export type CheckboxGroupContextState = {
  disabled: boolean;
  value: string[];
  defaultValue: string[];
  required: boolean;
  color: any;
  onChangeValue: (value: string[]) => void;
};

export type CheckboxGroupContextType = {
  state: CheckboxGroupContextState;
  setState: Dispatch<SetStateAction<CheckboxGroupContextState>>;
};
