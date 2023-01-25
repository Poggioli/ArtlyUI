import { Container } from "@artly-ui/Container";
import { Image } from "@artly-ui/image";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Image> = {
  title: "Data display components/Image",
  component: Image,
  argTypes: {
    ratio: {
      control: {
        type: "number",
      },
      defaultValue: 16 / 9,
    },
    src: {
      control: {
        type: "text",
      },
      defaultValue: "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
    },
  },
};

const Template: ComponentStory<typeof Image> = ({ ...args }) => (
  <Container center size="medium">
    <Image {...args} />
  </Container>
);

export const Default = Template.bind({});
export default story;
