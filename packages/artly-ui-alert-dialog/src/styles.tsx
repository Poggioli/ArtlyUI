import { keyframes, styled } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import * as AlertDialogPrimitives from "@radix-ui/react-alert-dialog";

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

const StyledAlertDialogRoot = AlertDialogPrimitives.Root;

const StyledAlertDialogTrigger = AlertDialogPrimitives.Trigger;

const StyledAlertDialogPortal = AlertDialogPrimitives.Portal;

const StyledAlertDialogCancel = AlertDialogPrimitives.Cancel;

const StyledAlertDialogAction = AlertDialogPrimitives.Action;

const StyledAlertDialogDescription = AlertDialogPrimitives.Description;

const StyledAlertDialogTitle = styled(AlertDialogPrimitives.Title, {
  marginBottom: "$6",
});

const StyledAlertDialogOverlay = styled(AlertDialogPrimitives.Overlay, {
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  backgroundColor: "$black-200",
  display: "flex",
  overflowY: "auto",
  padding: "$12 0",
  position: "fixed",
});

const StyledAlertDialogContent = styled(AlertDialogPrimitives.Content, {
  backgroundColor: "$alert-dialog--background",
  borderRadius: "$2",
  boxSizing: "border-box",
  $$boxShadow: "$colors-black-70 0 $sizes-2 $sizes-3 0",
  boxShadow: "$$boxShadow",
  margin: "auto",
  maxWidth: "calc($13 * 4)",
  padding: "$6",
  position: "relative",
  width: "85vw",
  animation: `${contentShow} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,

  "@small": {
    minWidth: "calc($13 * 3)",
    width: "75vw",
  },

  "&:focus": {
    outline: "none",
  },
});

const StyledAlertDialogActionContainer = styled(Flex, {
  margin: "$4 -$3 -$3 0",
});

export {
  StyledAlertDialogRoot,
  StyledAlertDialogTrigger,
  StyledAlertDialogPortal,
  StyledAlertDialogCancel,
  StyledAlertDialogAction,
  StyledAlertDialogDescription,
  StyledAlertDialogTitle,
  StyledAlertDialogOverlay,
  StyledAlertDialogContent,
  StyledAlertDialogActionContainer,
};
