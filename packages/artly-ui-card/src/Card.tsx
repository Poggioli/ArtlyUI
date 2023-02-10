import { forwardRef } from "@artly-ui/core";
import { StyledCard } from "./styles";
import { CardProps } from "./types";

const Card = forwardRef<typeof StyledCard, CardProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledCard {...props} ref={forwardedRef} />;
  }
);

export { Card };
