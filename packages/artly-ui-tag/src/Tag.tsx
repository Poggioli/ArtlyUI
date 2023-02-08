import { forwardRef } from "@artly-ui/core";
import { Text } from "@artly-ui/text";
import { StyledTag } from "./styles";
import { TagProps } from "./types";

const Tag = forwardRef<typeof StyledTag, TagProps>(
  ({ children, icon, ...props }, forwardedRef) => {
    return (
      <StyledTag
        {...props}
        ref={forwardedRef}
        align="center"
        gap="$3"
        hasIcon={!!icon}
        wrap="nowrap"
      >
        {icon}
        <Text variant="auxiliary">{children}</Text>
      </StyledTag>
    );
  }
);

export { Tag };
