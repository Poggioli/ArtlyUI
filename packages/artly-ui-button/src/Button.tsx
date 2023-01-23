import { forwardRef } from "@artly-ui/core";
import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const LEFT_POSITION = "left";
const RIGHT_POSITION = "right";
const NONE_POSITION = "none";
const ICON_SHAPE = "icon";

const Button = forwardRef<"button", ButtonProps>(
  ({ children, icon, shape, iconPosition, ...props }, forwardRef) => {
    if (shape === ICON_SHAPE && !props["aria-label"]) {
      throw new Error("Provide an arial-label when using icon shape.");
    }

    return (
      <StyledButton
        {...props}
        ref={forwardRef}
        data-disabled={props.disabled}
        shape={shape}
        iconPosition={shape === ICON_SHAPE ? NONE_POSITION : iconPosition}
      >
        {iconPosition === LEFT_POSITION ? icon : null}
        {children}
        {iconPosition === RIGHT_POSITION ? icon : null}
      </StyledButton>
    );
  }
);

export { Button };
