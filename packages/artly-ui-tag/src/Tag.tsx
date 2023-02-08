import { forwardRef } from "@artly-ui/core";
import { Text } from "@artly-ui/text";
import { StyledIconContainer, StyledTag } from "./styles";
import { IconPosition, TagProps } from "./types";

const SMALL_SIZE = "small";

const Tag = forwardRef<typeof StyledTag, TagProps>(
  (
    { children, icon, iconPosition = IconPosition.LEFT, ...props },
    forwardedRef
  ) => {
    return (
      <StyledTag {...props} ref={forwardedRef}>
        {icon && iconPosition === IconPosition.LEFT ? (
          <StyledIconContainer
            position={iconPosition}
            small={props.size === SMALL_SIZE}
          >
            {icon}
          </StyledIconContainer>
        ) : null}
        <Text
          variant="auxiliary"
          css={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {children}
        </Text>
        {icon && iconPosition === IconPosition.RIGTH ? (
          <StyledIconContainer
            position={iconPosition}
            small={props.size === SMALL_SIZE}
          >
            {icon}
          </StyledIconContainer>
        ) : null}
      </StyledTag>
    );
  }
);

export { Tag };
