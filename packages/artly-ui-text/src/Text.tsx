import { forwardRef } from "@artly-ui/core";
import { StyledText } from "./styles";
import { TextProps } from "./types";

const Text = forwardRef<'span', TextProps>(({ color, ...props }, forwardedRef) => {
  const css = {
    color: color ?? '$text-high-contrast',
    ...props.css
  };

  return <StyledText {...props} ref={forwardedRef} css={css} />;
});

export { Text };
