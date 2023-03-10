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

export const resetCssStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },

  "body, html": {
    height: "100%",
  },

  [`html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
    blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em,
    img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u,
    i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
    caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
    embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output,
    ruby, section, summary, time, mark, audio, video`]: {
    margin: "0",
    padding: "0",
    border: "0",
  },

  [`article, aside, details, figcaption, figure, footer, header, hgroup, main,
    menu, nav, section`]: {
    display: "block",
  },

  "*[hidden]": {
    display: "none",
  },

  a: {
    textDecoration: "none",
  },

  button: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: "0",
    outline: "inherit",
  },

  body: {
    background: "$background-app",
    lineHeight: "1",
    scrollBehavior: "smooth",
    textRendering: "optimizeSpeed",
  },

  "ol, ul, li": {
    listStyle: "none",
  },

  "blockquote, q": {
    quotes: "none",
  },

  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
  },

  table: {
    borderSpacing: 0,
  },

  fieldset: {
    border: 0,
    margin: 0,
    padding: 0,
  },
});

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

export const pinkAndBlueGreyTheme = createTheme(
  "pink-and-blue-grey-theme",
  themes.pinkAndBlueGreyTheme
);
