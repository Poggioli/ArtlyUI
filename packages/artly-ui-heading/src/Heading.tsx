import { CSS, forwardRef } from "@artly-ui/core";
import { StyledHeading } from "./styles";
import { HeadingProps } from "./types";

const AVAILABLE_HEADINGS: string[] = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Heading = forwardRef<"h1", HeadingProps>(
  ({ color, ...props }, forwardedRef) => {
    let as = `h${props.level as keyof JSX.IntrinsicElements}`;

    if (!AVAILABLE_HEADINGS.includes(as)) {
      as = "h1";
    }

    const css: CSS = {
      ...props.css,
      color: color ?? "$text--high-contrast",
    };

    return <StyledHeading ref={forwardedRef} as={as} {...props} css={css} />;
  }
);

export { Heading };
