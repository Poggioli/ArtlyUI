import { Button } from "@artly-ui/button";
import { forwardRef } from "@artly-ui/core";
import { Heading } from "@artly-ui/heading";
import { Text } from "@artly-ui/text";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  StyledDialog,
  StyledDialogActionContainer,
  StyledDialogClose,
  StyledDialogContent,
  StyledDialogDescription,
  StyledDialogOverlay,
  StyledDialogPortal,
  StyledDialogTitle,
  StyledDialogTrigger
} from "./styles";
import {
  DialogActionContainerProps,
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogTitleProps,
  DialogTriggerProps
} from "./types";

// ------------------------------------------- Dialog Close ------------------------------------------- //

const DialogClose = forwardRef<typeof StyledDialogClose, DialogCloseProps>(
  ({ asChild, children, ...props }, forwardedRef) => {
    if (asChild === undefined && !props["aria-label"]) {
      throw new Error("Provide an arial-label when has a close icon.");
    }

    if (asChild === undefined) {
      return (
        <StyledDialogClose
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
          <Button shape="icon">
            <Cross2Icon />
          </Button>
        </StyledDialogClose>
      );
    }

    return (
      <StyledDialogClose {...props} ref={forwardedRef} asChild={asChild}>
        {children}
      </StyledDialogClose>
    );
  }
);

// ------------------------------------------- Dialog Title ------------------------------------------- //

const DialogTitle = forwardRef<typeof StyledDialogTitle, DialogTitleProps>(
  ({ asChild, children, ...props }, forwardedRef) => {
    if (asChild === undefined) {
      return (
        <StyledDialogTitle {...props} ref={forwardedRef} asChild>
          <Heading level={5} color="$text-high-contrast" as="h2">
            {children}
          </Heading>
        </StyledDialogTitle>
      );
    }

    return (
      <StyledDialogTitle {...props} ref={forwardedRef} asChild={asChild}>
        {children}
      </StyledDialogTitle>
    );
  }
);

// ------------------------------------------- Dialog Description ------------------------------------------- //

const DialogDescription = forwardRef<
  typeof StyledDialogDescription,
  DialogDescriptionProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledDialogTitle {...props} ref={forwardedRef} asChild>
        <Text variant="body1" color="$text-low-contrast" as="p">
          {children}
        </Text>
      </StyledDialogTitle>
    );
  }

  return (
    <StyledDialogTitle {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledDialogTitle>
  );
});

// ------------------------------------------- Dialog Trigger ------------------------------------------- //

const DialogTrigger = forwardRef<
  typeof StyledDialogTrigger,
  DialogTriggerProps
>(({ asChild, children, ...props }, forwardedRef) => {
  if (asChild === undefined) {
    return (
      <StyledDialogTrigger {...props} ref={forwardedRef} asChild>
        {children}
      </StyledDialogTrigger>
    );
  }

  return (
    <StyledDialogTrigger {...props} ref={forwardedRef} asChild={asChild}>
      {children}
    </StyledDialogTrigger>
  );
});

// ------------------------------------------- Dialog Content ------------------------------------------- //

const DialogContent = forwardRef<
  typeof StyledDialogContent,
  DialogContentProps
>(
  (
    {
      children,
      hasCloseIcon = true,
      ariaLabelClose = "close dialog",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <StyledDialogPortal>
        <StyledDialogOverlay>
          <StyledDialogContent {...props} ref={forwardedRef}>
            {hasCloseIcon ? <DialogClose aria-label={ariaLabelClose} /> : null}
            {children}
          </StyledDialogContent>
        </StyledDialogOverlay>
      </StyledDialogPortal>
    );
  }
);

// ------------------------------------------- Dialog Root ------------------------------------------- //

const Dialog = StyledDialog;

// ------------------------------------------- Dialog Action Container ------------------------------------------- //

const DialogActionContainer = forwardRef<
  typeof StyledDialogActionContainer,
  DialogActionContainerProps
>(({ children, justify = "flex-end", gap = "$4", ...props }, forwardedRef) => {
  return (
    <StyledDialogActionContainer
      {...props}
      justify={justify}
      gap={gap}
      ref={forwardedRef}
    >
      {children}
    </StyledDialogActionContainer>
  );
});

export {
  DialogClose,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogContent,
  Dialog,
  DialogActionContainer,
};
