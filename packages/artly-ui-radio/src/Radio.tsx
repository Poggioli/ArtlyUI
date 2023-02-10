import { forwardRef } from "@artly-ui/core";
import { StyledRadio } from "./styles";
import { RadioProps } from "./types";

const Radio = forwardRef<typeof StyledRadio, RadioProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledRadio {...props} ref={forwardedRef} />;
  }
);

export { Radio };
