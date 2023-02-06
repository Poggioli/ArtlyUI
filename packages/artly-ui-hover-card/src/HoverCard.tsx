import { forwardRef } from "@artly-ui/core";
import { StyledHoverCard } from "./styles";
import { HoverCardProps } from "./types";

const HoverCard = forwardRef<typeof StyledHoverCard, HoverCardProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledHoverCard {...props} ref={forwardedRef} />
  }
);

export { HoverCard };
