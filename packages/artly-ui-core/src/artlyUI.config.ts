import { media } from "@artly-ui/tokens";
import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import { ElementType } from "react";
import WebFont from "webfontloader";
import * as themes from "./themes";

WebFont.load({
  google: {
    families: ["Roboto: 300, 400, 500, 700", "Nunito: 300, 400, 500, 600, 700"],
  },
});

export type ArtlyVariants<
  T extends { [key: string]: any; [key: symbol]: any }
> = Stitches.VariantProps<T>;

type PropertyValue<T extends keyof Stitches.CSSProperties> =
  | Stitches.PropertyValue<T>
  | Stitches.ScaleValue<T>
  | string
  | number;

export const artlyUI = createStitches({
  prefix: "artly-UI",
  theme: {
    ...themes.deepPurpleAndAmberTheme,
  },
  media,
  utils: {
    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    ta: (value: PropertyValue<"textAlign">) => ({ textAlign: value }),
    fd: (value: PropertyValue<"flexDirection">) => ({ flexDirection: value }),
    fw: (value: PropertyValue<"flexWrap">) => ({ flexWrap: value }),
    ai: (value: PropertyValue<"alignItems">) => ({ alignItems: value }),
    ac: (value: PropertyValue<"alignContent">) => ({ alignContent: value }),
    jc: (value: PropertyValue<"justifyContent">) => ({ justifyContent: value }),
    as: (value: PropertyValue<"alignSelf">) => ({ alignSelf: value }),
    fg: (value: PropertyValue<"flexGrow">) => ({ flexGrow: value }),
    fs: (value: PropertyValue<"flexShrink">) => ({ flexShrink: value }),
    fb: (value: PropertyValue<"flexBasis">) => ({ flexBasis: value }),
    bc: (value: PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
    br: (value: PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
    btrr: (value: PropertyValue<"borderTopRightRadius">) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: PropertyValue<"borderBottomRightRadius">) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: PropertyValue<"borderBottomLeftRadius">) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: PropertyValue<"borderTopLeftRadius">) => ({
      borderTopLeftRadius: value,
    }),
    bs: (value: PropertyValue<"boxShadow">) => ({ boxShadow: value }),
    lh: (value: PropertyValue<"lineHeight">) => ({ lineHeight: value }),
    ox: (value: PropertyValue<"overflowX">) => ({ overflowX: value }),
    oy: (value: PropertyValue<"overflowY">) => ({ overflowY: value }),
    pe: (value: PropertyValue<"pointerEvents">) => ({ pointerEvents: value }),
    us: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    size: (value: PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    appearance: (value: PropertyValue<"appearance">) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (value: PropertyValue<"userSelect">) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (value: PropertyValue<"backgroundClip">) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
    fullscreen: (value: PropertyValue<"position">) => ({
      position: value,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
  },
});

export const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  artlyUI;

export const createTheme = artlyUI.createTheme;
export type CSS = Stitches.CSS<typeof config>;
export interface ComponentCSSProp {
  css?: CSS;
  as?: ElementType;
}
export type Theme = ReturnType<typeof createTheme>;
export const deepPurpleAndAmberTheme = createTheme(
  "deep-purple-and-amber-theme",
  themes.deepPurpleAndAmberTheme
);
export const indigoPinkTheme = createTheme(
  "indigo-pink-theme",
  themes.indigoPinkTheme
);
