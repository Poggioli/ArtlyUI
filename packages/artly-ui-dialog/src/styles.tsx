import { keyframes, styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import * as DialogPrimitives from "@radix-ui/react-dialog";

const overlayShow = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const contentShow = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const StyledDialog = DialogPrimitives.Root;

const StyledDialogTrigger = styled(DialogPrimitives.Trigger, {
  pointerEvents: "visible",
});

const StyledDialogPortal = DialogPrimitives.Portal;

const StyledDialogOverlay = styled(DialogPrimitives.Overlay, {
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: "$black-200",
  display: "flex",
  overflowY: "auto",
  padding: "$12 0",
  position: "fixed",
});

const StyledDialogContent = styled(DialogPrimitives.Content, {
  animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: "$dialog--background",
  boxSizing: "border-box",
  borderRadius: "$2",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  margin: "auto",
  maxWidth: "calc($13 * 8)",
  padding: "$6",
  position: "relative",
  width: "85vw",

  "@small": {
    minWidth: "calc($13 * 3)",
    width: "75vw",
  },

  "&:focus": {
    outline: "none",
  },
});

const StyledDialogTitle = styled(DialogPrimitives.Title, {
  marginBottom: "$6",
  maxWidth: "95%",
});

const StyledActionContainer = styled(Flex, {
  marginBottom: "-$3",
});

const StyledDialogDescription = DialogPrimitives.Description;

const StyledDialogClose = styled(DialogPrimitives.Close, {});

export {
  StyledDialog,
  StyledDialogTrigger,
  StyledDialogPortal,
  StyledDialogOverlay,
  StyledDialogContent,
  StyledDialogTitle,
  StyledDialogDescription,
  StyledDialogClose,
  StyledActionContainer,
};
