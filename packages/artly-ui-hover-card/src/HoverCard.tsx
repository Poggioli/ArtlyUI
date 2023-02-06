import { forwardRef } from "@artly-ui/core";
import {
  StyledHoverCardArrow,
  StyledHoverCardContent,
  StyledHoverCardPortal,
  StyledHoverCardRoot,
  StyledHoverCardTrigger
} from "./styles";
import {
  HoverCardContentProps,
  HoverCardProps,
  HoverCardTriggerProps
} from "./types";

// ------------------------------------------- Hover card root ------------------------------------------- //

const HoverCard = forwardRef<typeof StyledHoverCardRoot, HoverCardProps>(
  (props, forwardedRef) => {
    return <StyledHoverCardRoot ref={forwardedRef} {...props} />;
  }
);

// ------------------------------------------- Hover card content ------------------------------------------- //

const HoverCardContent = forwardRef<
  typeof StyledHoverCardContent,
  HoverCardContentProps
>(
  (
    { children, forceMount, width, height, hasArrow, ...props },
    forwardedRef
  ) => {
    return (
      <StyledHoverCardPortal forceMount={forceMount}>
        <StyledHoverCardContent
          forceMount={forceMount}
          ref={forwardedRef}
          {...props}
        >
          {children}
          {hasArrow ? (
            <StyledHoverCardArrow
              width={width}
              height={height}
              data-testid="arrow"
            />
          ) : null}
        </StyledHoverCardContent>
      </StyledHoverCardPortal>
    );
  }
);

// ------------------------------------------- Hover card trigger ------------------------------------------- //

const HoverCardTrigger = forwardRef<
  typeof StyledHoverCardTrigger,
  HoverCardTriggerProps
>(({ children, asChild, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledHoverCardTrigger ref={forwardedRef} {...props} asChild>
        {children}
      </StyledHoverCardTrigger>
    );
  }

  return (
    <StyledHoverCardTrigger ref={forwardedRef} {...props} asChild={asChild}>
      {children}
    </StyledHoverCardTrigger>
  );
});

export { HoverCard, HoverCardContent, HoverCardTrigger };
