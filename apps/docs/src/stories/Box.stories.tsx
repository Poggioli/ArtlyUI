import { Box } from "@artly-ui/box";
import { Heading } from "@artly-ui/heading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Box> = {
  title: "Layout components/Box",
  component: Box,
};

const Template: ComponentStory<typeof Box> = ({ ...args }) => (
  <Box {...args} css={{ backgroundColor: "$primary-90", height: "$13" }}>
    <Heading color="$gray-10">Hello, I&apos;m Box</Heading>
  </Box>
);

export const Default = Template.bind({});
export default story;
