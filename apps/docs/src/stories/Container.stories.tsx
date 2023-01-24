import { Container } from "@artly-ui/Container";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Container> = {
  title: "Layout components/Container",
  component: Container,
  argTypes: {
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large", "extraLarge"],
    },
    center: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Container> = ({ ...args }) => (
  <Container {...args} css={{ backgroundColor: "$primary-90" }}>
    <h1>Hello, I&apos;m Container</h1>
  </Container>
);

export const Default = Template.bind({});
export default story;
