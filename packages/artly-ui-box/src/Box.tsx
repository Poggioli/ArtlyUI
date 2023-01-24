import { forwardRef } from "@artly-ui/core";
import { StyledBox } from "./styles";
import { BoxProps } from "./types";

const Box = forwardRef<typeof StyledBox, BoxProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledBox {...props} ref={forwardedRef} />;
  }
);

export { Box };
