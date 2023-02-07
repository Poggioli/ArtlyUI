import { forwardRef } from "@artly-ui/core";
import { StyledBadge } from "./styles";
import { BadgeProps } from "./types";

const Badge = forwardRef<typeof StyledBadge, BadgeProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledBadge {...props} ref={forwardedRef} />;
  }
);

export { Badge };
