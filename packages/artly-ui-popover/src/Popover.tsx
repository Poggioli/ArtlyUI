import { Button } from "@artly-ui/button";
import { forwardRef } from "@artly-ui/core";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  StyledPopover,
  StyledPopoverAnchor,
  StyledPopoverArrow,
  StyledPopoverClose,
  StyledPopoverContent,
  StyledPopoverPortal,
  StyledPopoverTrigger
} from "./styles";
import {
  PopoverAnchorProps,
  PopoverCloseProps,
  PopoverContentProps,
  PopoverTriggerProps
} from "./types";

// ------------------------------------------- Popover Close ------------------------------------------- //

const PopoverClose = forwardRef<typeof StyledPopoverClose, PopoverCloseProps>(
  ({ asChild, children, ...props }, forwardedRef) => {
    if (asChild === undefined && !props["aria-label"]) {
      throw new Error("Provide an arial-label when has a close icon.");
    }

    if (asChild === undefined) {
      return (
        <StyledPopoverClose
          {...props}
          ref={forwardedRef}
          asChild
          css={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(-25%, 25%)",
          }}
        >
          <Button shape="icon" size="small">
            <Cross2Icon />
          </Button>
        </StyledPopoverClose>
      );
    }

    return (
      <StyledPopoverClose {...props} ref={forwardedRef} asChild={asChild}>
        {children}
      </StyledPopoverClose>
    );
  }
);

// ------------------------------------------- Popover Content ------------------------------------------- //

const PopoverContent = forwardRef<
  typeof StyledPopoverContent,
  PopoverContentProps
>(
  (
    {
      children,
      forceMount,
      container,
      width,
      height,
      hasArrow = true,
      hasCloseIcon = true,
      ariaLabelClose = "close popover",
      collisionPadding = 15,
      sideOffset = 5,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <StyledPopoverPortal forceMount={forceMount} container={container}>
        <StyledPopoverContent
          {...props}
          ref={forwardedRef}
          collisionPadding={collisionPadding}
          sideOffset={sideOffset}
        >
          {children}
          {hasCloseIcon ? <PopoverClose aria-label={ariaLabelClose} /> : null}
          {hasArrow ? (
            <StyledPopoverArrow
              width={width}
              height={height}
              data-testid="arrow"
            />
          ) : null}
        </StyledPopoverContent>
      </StyledPopoverPortal>
    );
  }
);

// ------------------------------------------- Popover Anchor ------------------------------------------- //

const PopoverAnchor = forwardRef<
  typeof StyledPopoverAnchor,
  PopoverAnchorProps
>(({ children, asChild, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledPopoverAnchor ref={forwardedRef} {...props} asChild>
        {children}
      </StyledPopoverAnchor>
    );
  }

  return (
    <StyledPopoverAnchor ref={forwardedRef} {...props} asChild={asChild}>
      {children}
    </StyledPopoverAnchor>
  );
});

// ------------------------------------------- Popover Trigger ------------------------------------------- //

const PopoverTrigger = forwardRef<
  typeof StyledPopoverTrigger,
  PopoverTriggerProps
>(({ children, asChild, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledPopoverTrigger ref={forwardedRef} {...props} asChild>
        {children}
      </StyledPopoverTrigger>
    );
  }

  return (
    <StyledPopoverTrigger ref={forwardedRef} {...props} asChild={asChild}>
      {children}
    </StyledPopoverTrigger>
  );
});

// ------------------------------------------- Popover Trigger ------------------------------------------- //

const Popover = StyledPopover;

export { PopoverClose, PopoverContent, PopoverAnchor, PopoverTrigger, Popover };
