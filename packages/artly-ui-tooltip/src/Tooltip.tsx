import { forwardRef } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import { Text } from "@artly-ui/text";
import {
  StyledTooltipArrow,
  StyledTooltipContent,
  StyledTooltipPortal,
  StyledTooltipProvider,
  StyledTooltipRoot,
  StyledTooltipTrigger,
} from "./styles";
import {
  TooltipContentProps,
  TooltipProps,
  TooltipTriggerProps,
} from "./types";

// ------------------------------------------- Tooltip Root ------------------------------------------- //

const Tooltip = forwardRef<typeof StyledTooltipRoot, TooltipProps>(
  (
    {
      delayDuration,
      skipDelayDuration,
      disableHoverableContent,
      children,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <StyledTooltipProvider
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        disableHoverableContent={disableHoverableContent}
      >
        <StyledTooltipRoot
          disableHoverableContent={disableHoverableContent}
          delayDuration={delayDuration}
          ref={forwardedRef}
          {...props}
        >
          {children}
        </StyledTooltipRoot>
      </StyledTooltipProvider>
    );
  }
);

// ------------------------------------------- Tooltip TooltipContent ------------------------------------------- //

const TooltipContent = forwardRef<
  typeof StyledTooltipContent,
  TooltipContentProps
>(
  (
    {
      direction,
      align,
      justify,
      wrap,
      templateColumns,
      templateRows,
      gap,
      gapX,
      gapY,
      forceMount,
      container,
      width,
      height,
      children,
      icon,
      sideOffset,
      collisionPadding,
      hasArrow,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <StyledTooltipPortal forceMount={forceMount} container={container}>
        <StyledTooltipContent
          {...props}
          ref={forwardedRef}
          sideOffset={sideOffset ?? 8}
          collisionPadding={collisionPadding ?? 16}
        >
          <Flex
            direction={direction}
            align={align ?? "center"}
            justify={justify}
            wrap={wrap ?? "nowrap"}
            templateColumns={templateColumns}
            templateRows={templateRows}
            gap={gap}
            gapX={gapX ?? "$3"}
            gapY={gapY}
          >
            {icon}
            <Text
              variant="auxiliary"
              css={{
                flex: 1,
              }}
            >
              {children}
            </Text>
          </Flex>
          {hasArrow === undefined || hasArrow ? (
            <StyledTooltipArrow width={width} height={height} />
          ) : null}
        </StyledTooltipContent>
      </StyledTooltipPortal>
    );
  }
);

// ------------------------------------------- Tooltip Trigger ------------------------------------------- //

const TooltipTrigger = forwardRef<
  typeof StyledTooltipTrigger,
  TooltipTriggerProps
>(({ asChild, ...props }, forwardedRef) => {
  if (asChild === undefined || asChild) {
    return <StyledTooltipTrigger {...props} ref={forwardedRef} asChild />;
  }

  return <StyledTooltipTrigger {...props} ref={forwardedRef} />;
});

export { Tooltip, TooltipContent, TooltipTrigger };
