import { assignRefs, CSS, forwardRef } from "@artly-ui/core";
import { FC, useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  StyledScrollAreaCorner,
  StyledScrollAreaRoot,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaViewport,
} from "./styles";
import {
  ScrollAreaOrientation,
  ScrollAreaProps,
  ScrollBarProps,
} from "./types";

const ScrollBar: FC<ScrollBarProps> = ({ ...props }) => {
  return (
    <StyledScrollAreaScrollbar {...props}>
      <StyledScrollAreaThumb />
    </StyledScrollAreaScrollbar>
  );
};

const ScrollArea = forwardRef<typeof StyledScrollAreaRoot, ScrollAreaProps>(
  (
    {
      children,
      css,
      dir = "ltr",
      type = "hover",
      orientation = ScrollAreaOrientation.HORIZONTAL,
      ...props
    },
    forwardedRef
  ) => {
    const viewPortRef = useRef<HTMLDivElement | null>(null);
    const [cssSize, setCssSize] = useState<CSS>({});

    const setCssSizeFn = useCallback(
      (bounderies: DOMRect) => {
        if (orientation === ScrollAreaOrientation.VERTICAL) {
          setCssSize({
            width: `${bounderies.width + 28}px !important`,
          });
        } else {
          setCssSize({
            height: `${bounderies.height + 28}px !important`,
          });
        }
      },
      [orientation]
    );

    useLayoutEffect(() => {
      const viewPortElement: HTMLDivElement =
        viewPortRef.current as HTMLDivElement;
      setCssSizeFn(viewPortElement.getBoundingClientRect());
    }, [viewPortRef, orientation, setCssSizeFn]);

    return (
      <StyledScrollAreaRoot
        css={{ ...css, ...cssSize }}
        dir={dir}
        type={type}
        {...props}
        data-orientation={orientation}
      >
        <StyledScrollAreaViewport ref={assignRefs(forwardedRef, viewPortRef)}>
          {children}
        </StyledScrollAreaViewport>
        <ScrollBar orientation={orientation} />
        <StyledScrollAreaCorner />
      </StyledScrollAreaRoot>
    );
  }
);

export { ScrollArea };
