import { forwardRef } from "@artly-ui/core";
import { StyledSelect } from "./styles";
import { SelectProps } from "./types";

const Select = forwardRef<typeof StyledSelect, SelectProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledSelect {...props} ref={forwardedRef} />
  }
);

export { Select };
