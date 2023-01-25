import { styled } from "@artly-ui/core";
import * as ScrollAreaPrimitives from "@radix-ui/react-scroll-area";

const StyledScrollAreaRoot = styled(ScrollAreaPrimitives.Root, {
  overflow: "hidden",

  '&[data-orientation="vertical"]': {
    width: "fit-content",
  },

  '&[data-orientation="horizontal"]': {
    height: "fit-content",
  },
});

const StyledScrollAreaViewport = styled(ScrollAreaPrimitives.Viewport, {
  borderRadius: "inherit",
  height: "100%",
  width: "100%",
});

const StyledScrollAreaScrollbar = styled(ScrollAreaPrimitives.Scrollbar, {
  backgroundColor: "$scroll-area--scroll-bar--background",
  borderRadius: "$4",
  display: "flex",
  touchAction: "none",
  transition: "background 200ms ease-out",
  userSelect: "none",

  '&[data-orientation="vertical"]': {
    width: "$3",
  },

  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: "$3",
  },
});

const StyledScrollAreaThumb = styled(ScrollAreaPrimitives.Thumb, {
  backgroundColor: "$scroll-area--thumb--background",
  borderRadius: "$4",
  flex: 1,
  position: "relative",
  opacity: 0.8,

  "&::before": {
    content: '""',
    height: "100%",
    left: "50%",
    minHeight: "$9",
    minWidth: "$9",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
});

const StyledScrollAreaCorner = styled(ScrollAreaPrimitives.Corner, {
  borderRadius: "$4",
});

export {
  StyledScrollAreaRoot,
  StyledScrollAreaViewport,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaCorner,
};
