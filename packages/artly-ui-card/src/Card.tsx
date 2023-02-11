import { forwardRef } from "@artly-ui/core";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { Text } from "@artly-ui/text";
import { StyledCard } from "./styles";
import {
  CardActionProps,
  CardDescriptionProps,
  CardProps,
  CardSubtitleProps,
  CardTitleProps
} from "./types";

const Card = forwardRef<typeof StyledCard, CardProps>(
  ({ direction = "column", ...props }, forwardedRef) => {
    return <StyledCard {...props} ref={forwardedRef} direction={direction} />;
  }
);

const CardTitle = forwardRef<typeof Heading, CardTitleProps>(
  ({ level = 5, as = "h3", ...props }, forwardedRef) => {
    return <Heading {...props} ref={forwardedRef} level={level} as={as} />;
  }
);

const CardSubtitle = forwardRef<typeof Text, CardSubtitleProps>(
  (
    {
      variant = "auxiliary",
      as = "h4",
      color = "$text-low-contrast",
      ...props
    },
    forwardedRef
  ) => {
    return (
      <Text
        {...props}
        ref={forwardedRef}
        variant={variant}
        as={as}
        color={color}
      />
    );
  }
);

const CardDescription = forwardRef<typeof Text, CardDescriptionProps>(
  (
    { variant = "body2", as = "p", color = "$text-low-contrast", ...props },
    forwardedRef
  ) => {
    return (
      <Text
        {...props}
        ref={forwardedRef}
        variant={variant}
        as={as}
        color={color}
      />
    );
  }
);

const CardContainerAction = forwardRef<typeof Flex, CardActionProps>(
  ({ justify = "flex-start", gap = "$4", ...props }, forwardedRef) => {
    return <Flex {...props} ref={forwardedRef} justify={justify} gap={gap} />;
  }
);

export { Card, CardTitle, CardSubtitle, CardDescription, CardContainerAction };
