import { forwardRef } from "@artly-ui/core";
import { StyledInput } from "./styles";
import { InputProps } from "./types";

const Input = forwardRef<typeof StyledInput, InputProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledInput {...props} ref={forwardedRef} />;
  }
);

export { Input };
