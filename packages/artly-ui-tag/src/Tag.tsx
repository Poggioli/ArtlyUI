import { forwardRef } from "@artly-ui/core";
import { Text } from "@artly-ui/text";
import { Cross2Icon } from "@radix-ui/react-icons";
import { StyledIconContainer, StyledTag } from "./styles";
import { IconPosition, TagProps } from "./types";

const SMALL_SIZE = "small";

const Tag = forwardRef<typeof StyledTag, TagProps>(
  (
    { children, icon, iconPosition = IconPosition.LEFT, onDelete, ...props },
    forwardedRef
  ) => {
    return (
      <StyledTag
        {...props}
        ref={forwardedRef}
        aria-label={onDelete ? null : props["aria-label"]}
      >
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
        {!onDelete && icon && iconPosition === IconPosition.RIGTH ? (
          <StyledIconContainer
            position={iconPosition}
            small={props.size === SMALL_SIZE}
          >
            {icon}
          </StyledIconContainer>
        ) : null}
        {onDelete ? (
          <StyledIconContainer
            position={iconPosition}
            small={props.size === SMALL_SIZE}
            css={{
              cursor: "pointer",
            }}
            aria-label={props["aria-label"]}
            as="button"
            onClick={onDelete}
          >
            <Cross2Icon />
          </StyledIconContainer>
        ) : null}
      </StyledTag>
    );
  }
);

export { Tag };
