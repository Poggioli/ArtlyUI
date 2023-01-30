import { keyframes, styled } from "@artly-ui/core";
import * as ToastPrimitives from "@radix-ui/react-toast";

const VIEWPORT_PADDING = 24;

const hide = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

const rigthToLeft = keyframes({
  from: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {
    transform: "translateX(0)",
  },
});

const leftToRight = keyframes({
  from: {
    transform: `translateX(calc(-100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {
    transform: "translateX(0)",
  },
});

const bottomToTop = keyframes({
  from: {
    transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {
    transform: "translateY(0)",
  },
});

const topToBottom = keyframes({
  from: {
    transform: `translateY(calc(-100% + ${VIEWPORT_PADDING}px))`,
  },
  to: {
    transform: "translateY(0)",
  },
});

const swipeOut = keyframes({
  from: {
    transform: "translateX(var(--radix-toast-swipe-end-x))",
  },
  to: {
    transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))`,
  },
});

const StyledToastTitle = styled(ToastPrimitives.Title, {});

const StyledToastDescription = styled(ToastPrimitives.Description, {});

const StyledToastRoot = styled(ToastPrimitives.Root, {
  alignItems: "center",
  backgroundColor: "$toast--background",
  borderRadius: "$2",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  padding: "$4",

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-swipe="move"]': {
    transform: "translateX(var(--radix-toast-swipe-move-x))",
  },

  '&[data-swipe="cancel"]': {
    transform: "translateX(0)",
    transition: "transform 200ms ease-out",
  },

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },

  '&[data-state="open"]': {
    animation: `$$openAnimation`,
  },

  variants: {
    custom: {
      true: {
        alignItems: "inherit",
        backgroundColor: "inherit",
        borderRadius: "$2",
        boxShadow: "none",
        padding: 0,
      },
    },
    horizontal: {
      left: {},
      center: {},
      right: {},
    },
    vertical: {
      top: {},
      center: {},
      bottom: {},
    },
  },

  defaultVariants: {
    horizontal: "center",
    vertical: "bottom",
    custom: false,
  },

  compoundVariants: [
    {
      vertical: "top",
      horizontal: "left",
      css: {
        $$openAnimation: `${leftToRight} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "top",
      horizontal: "center",
      css: {
        $$openAnimation: `${topToBottom} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "top",
      horizontal: "right",
      css: {
        $$openAnimation: `${rigthToLeft} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "center",
      horizontal: "left",
      css: {
        $$openAnimation: `${leftToRight} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "center",
      horizontal: "center",
      css: {
        $$openAnimation: `${bottomToTop} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "center",
      horizontal: "right",
      css: {
        $$openAnimation: `${rigthToLeft} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "bottom",
      horizontal: "left",
      css: {
        $$openAnimation: `${leftToRight} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "bottom",
      horizontal: "center",
      css: {
        $$openAnimation: `${bottomToTop} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
    {
      vertical: "bottom",
      horizontal: "right",
      css: {
        $$openAnimation: `${rigthToLeft} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
    },
  ],
});

const StyledToastViewport = styled(ToastPrimitives.Viewport, {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  listStyle: "none",
  maxWidth: "100vw",
  outline: "none",
  padding: VIEWPORT_PADDING,
  position: "fixed",
  zIndex: "$12",

  variants: {
    horizontal: {
      left: {
        left: 0,
      },
      center: {
        left: "50%",
        transform: "translateX(-50%)",
      },
      right: {
        right: 0,
      },
    },
    vertical: {
      top: {
        top: 0,
      },
      center: {
        top: "50%",
        transform: "translateY(-50%)",
      },
      bottom: {
        bottom: 0,
      },
    },
  },

  defaultVariants: {
    horizontal: "center",
    vertical: "bottom",
  },
});

export {
  StyledToastTitle,
  StyledToastDescription,
  StyledToastRoot,
  StyledToastViewport,
};
