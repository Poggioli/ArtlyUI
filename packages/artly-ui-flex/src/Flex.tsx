import { CSS, forwardRef } from "@artly-ui/core";
import { StyledFlex } from "./styles";
import { FlexProps } from "./types";

const Flex = forwardRef<typeof StyledFlex, FlexProps>(
  (
    {
      align,
      css,
      direction,
      flex,
      gap,
      gapX,
      gapY,
      justify,
      templateColumns,
      templateRows,
      wrap,
      ...props
    },
    forwardedRef
  ) => {
    const flexStyles: CSS = {
      alignItems: align,
      flexDirection: direction,
      flex,
      gap,
      columnGap: gapX,
      rowGap: gapY,
      justifyContent: justify,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
      flexWrap: wrap,
    };

    Object.keys(flexStyles).forEach((k) => {
      if (flexStyles[k] === null || flexStyles[k] === undefined) {
        delete flexStyles[k];
      }
    });

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
