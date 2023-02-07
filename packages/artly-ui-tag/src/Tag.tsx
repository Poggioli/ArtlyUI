import { forwardRef } from "@artly-ui/core";
import { Text } from "@artly-ui/text";
import { StyledTag } from "./styles";
import { TagProps } from "./types";

const Tag = forwardRef<typeof StyledTag, TagProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledTag {...props} ref={forwardedRef} align="center">
        <Text variant="auxiliary">{children}</Text>
      </StyledTag>
    );
  }
);

export { Tag };
