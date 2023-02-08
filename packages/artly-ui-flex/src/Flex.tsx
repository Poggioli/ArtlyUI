import { forwardRef } from "@artly-ui/core";
import { StyledFlex } from "./styles";
import { FlexProps } from "./types";

const Flex = forwardRef<typeof StyledFlex, FlexProps>(
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
      css,
      ...props
    },
    forwardedRef
  ) => {
    const flexStyles = {
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ?? "wrap",
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      gap,
      columnGap: gapX,
      rowGap: gapY,
      width:
        direction === "column" || direction === "column-reverse"
          ? "100%"
          : css?.width,
    };

    return (
      <StyledFlex
        ref={forwardedRef}
        css={{ ...flexStyles, ...css }}
        {...props}
      />
    );
  }
);

export { Flex };
