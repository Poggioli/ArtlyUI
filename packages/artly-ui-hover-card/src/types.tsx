import * as HoverCardPrimitives from "@radix-ui/react-hover-card";

export type HoverCardProps = HoverCardPrimitives.HoverCardProps;

export type HoverCardContentProps = HoverCardPrimitives.HoverCardContentProps &
  HoverCardPrimitives.HoverCardPortalProps &
  HoverCardPrimitives.HoverCardArrowProps & {
    hasArrow?: boolean;
  };

export type HoverCardTriggerProps = HoverCardPrimitives.HoverCardTriggerProps;
