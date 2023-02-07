import { forwardRef } from "@artly-ui/core";
import { StyledTag } from "./styles";
import { TagProps } from "./types";

const Tag = forwardRef<typeof StyledTag, TagProps>(
  ({ ...props }, forwardedRef) => {
    return <StyledTag {...props} ref={forwardedRef} />;
  }
);

export { Tag };
