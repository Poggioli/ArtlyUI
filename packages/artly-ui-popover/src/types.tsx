import * as PopoverPrimitives from "@radix-ui/react-popover";

export type PopoverContentProps = PopoverPrimitives.PopoverContentProps &
  PopoverPrimitives.PopoverPortalProps &
  PopoverPrimitives.PopoverArrowProps & {
    hasArrow?: boolean;
    hasCloseIcon?: boolean;
    ariaLabelClose?: string;
  };

export type PopoverCloseProps = PopoverPrimitives.PopoverCloseProps;

export type PopoverTriggerProps = PopoverPrimitives.PopoverTriggerProps;

export type PopoverProps = PopoverPrimitives.PopoverProps;

export type PopoverAnchorProps = PopoverPrimitives.PopoverAnchorProps;

