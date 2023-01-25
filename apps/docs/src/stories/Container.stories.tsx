import { Container } from "@artly-ui/Container";
import { Heading } from "@artly-ui/heading";
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
      defaultValue: "large",
    },
    center: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Container> = ({ ...args }) => (
  <Container {...args} css={{ backgroundColor: "$primary-90" }}>
    <Heading color="$gray-10" level={3}>
      Hello, I&apos;m Container
    </Heading>
  </Container>
);

export const Default = Template.bind({});
export default story;
