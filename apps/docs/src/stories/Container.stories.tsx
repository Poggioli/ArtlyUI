import { Box } from "@artly-ui/box";
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
      defaultValue: "large",
    },
    center: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Container> = ({ ...args }) => (
  <Container {...args} css={{ backgroundColor: "$primary-30", padding: "$4" }}>
    <Box
      css={{ backgroundColor: "$primary-90", height: "$13", width: "$13" }}
    />
  </Container>
);

export const Default = Template.bind({});
export default story;
