import { FlexProps } from "@artly-ui/flex";
import * as TooltipPrimitives from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

export type TooltipContentProps = TooltipPrimitives.TooltipPortalProps &
  TooltipPrimitives.TooltipContentProps &
  TooltipPrimitives.TooltipArrowProps &
  FlexProps & {
    icon?: ReactNode;
    hasArrow?: boolean;
  };

export type TooltipProps = TooltipPrimitives.TooltipProviderProps &
  TooltipPrimitives.TooltipProps;

export type TooltipTriggerProps = TooltipPrimitives.TooltipTriggerProps;
