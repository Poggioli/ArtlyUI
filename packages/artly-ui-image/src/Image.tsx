import { forwardRef } from "@artly-ui/core";
import * as AspectRatioPrimitives from "@radix-ui/react-aspect-ratio";
import { StyledImage } from "./styles";
import { ImageProps } from "./types";

const Image = forwardRef<typeof StyledImage, ImageProps>(
  ({ ratio = 16 / 9, ...props }, forwardedRef) => {
    return (
      <AspectRatioPrimitives.Root ratio={ratio} asChild>
        <StyledImage ref={forwardedRef} {...props} />
      </AspectRatioPrimitives.Root>
    );
  }
);

export { Image };
