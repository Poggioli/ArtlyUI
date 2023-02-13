import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import * as ToggleGroupPrimitives from "@radix-ui/react-toggle-group";
import { StyledToggleGroupItem, StyledToggleGroupRoot } from "./styles";

export type ToggleGroupProps = HTMLArtlyProps<typeof StyledToggleGroupRoot> &
  ArtlyVariants<typeof StyledToggleGroupRoot> &
  (
    | ToggleGroupPrimitives.ToggleGroupSingleProps
    | ToggleGroupPrimitives.ToggleGroupMultipleProps
  );

export type ToggleGroupItemProps = HTMLArtlyProps<
  typeof StyledToggleGroupItem
> &
  ArtlyVariants<typeof StyledToggleGroupItem> &
  ToggleGroupPrimitives.ToggleGroupItemProps;
