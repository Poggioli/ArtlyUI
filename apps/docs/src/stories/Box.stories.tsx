import { Box } from "@artly-ui/box";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Box> = {
  title: "Layout components/Box",
  component: Box,
};

const Template: ComponentStory<typeof Box> = ({ ...args }) => (
  <Box
    {...args}
    css={{ backgroundColor: "$primary-90", height: "$13", width: "$13" }}
  />
);

export const Default = Template.bind({});
export default story;
