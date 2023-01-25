import { forwardRef } from "@artly-ui/core";
import { StyledProgressIndicator, StyledProgressRoot } from "./styles";
import { ProgressBarProps } from "./types";

const ProgressBar = forwardRef<typeof StyledProgressRoot, ProgressBarProps>(
  ({ asChild, color, ...props }, forwardedRef) => {
    return (
      <StyledProgressRoot ref={forwardedRef} {...props}>
        <StyledProgressIndicator
          asChild={asChild}
          color={color}
          style={{ transform: `translateX(-${100 - (props.value ?? 0)}%)` }}
        />
      </StyledProgressRoot>
    );
  }
);

export { ProgressBar };
