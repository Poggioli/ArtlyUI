import { forwardRef } from "@artly-ui/core";
import { StyledLabel } from "./styles";
import { LabelProps } from "./types";

const Label = forwardRef<typeof StyledLabel, LabelProps>(
  ({ color, ...props }, forwardedRef) => {
    const css = {
      color: color ?? "$text-high-contrast",
      ...props.css,
    };

    return <StyledLabel {...props} ref={forwardedRef} css={css} />;
  }
);

export { Label };
