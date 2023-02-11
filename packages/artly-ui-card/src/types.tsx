import { ArtlyVariants, HTMLArtlyProps } from "@artly-ui/core";
import { FlexProps } from "@artly-ui/flex";
import { HeadingProps } from "@artly-ui/heading";
import { TextProps } from "@artly-ui/text";
import { StyledCard } from "./styles";

export type CardProps = HTMLArtlyProps<typeof StyledCard> &
  ArtlyVariants<typeof StyledCard> &
  FlexProps;

export type CardTitleProps = HeadingProps;

export type CardSubtitleProps = TextProps;

export type CardDescriptionProps = TextProps;

export type CardActionProps = FlexProps;
