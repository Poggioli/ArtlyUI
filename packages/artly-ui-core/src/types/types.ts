import React from "react";
import { CSS } from "../artlyUI.config";

export type As<Props = any> = React.ElementType<Props>;

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, "as" | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type HTMLArtlyProps<T extends As> = Omit<PropsOf<T>, "as" | "CSS"> & {
  as?: As;
  css?: CSS;
};

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    css?: CSS;
    as?: AsComponent;
  };

export interface ArtlyComponent<
  Component extends As,
  Props extends object = {}
> {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  id?: string;
}

export const forwardRef = <Component extends As, Props extends object = {}>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
      css?: CSS;
    }
  >
): ArtlyComponent<Component, Props> => {
  return React.forwardRef(component) as unknown as ArtlyComponent<
    Component,
    Props
  >;
};
