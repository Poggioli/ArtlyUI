import { forwardRef } from "@artly-ui/core";
import { Image } from "@artly-ui/image";
import {
  StyledAvatarFallback,
  StyledAvatarImage,
  StyledAvatarRoot,
} from "./styles";
import { AvatarProps } from "./types";

const Avatar = forwardRef<typeof StyledAvatarRoot, AvatarProps>(
  ({ children, delayMs, size, color, ratio, ...props }, forwardedRef) => {
    return (
      <StyledAvatarRoot ref={forwardedRef} size={size}>
        <StyledAvatarImage {...props} asChild>
          <Image ratio={ratio} />
        </StyledAvatarImage>
        <StyledAvatarFallback delayMs={delayMs} size={size} color={color}>
          {children}
        </StyledAvatarFallback>
      </StyledAvatarRoot>
    );
  }
);

export { Avatar };
