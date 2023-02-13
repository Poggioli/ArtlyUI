import { Theme } from "@artly-ui/core";
import { ReactNode } from "react";

export type ArtlyProviderProps = {
  theme?: Theme;
  children: ReactNode;
};
