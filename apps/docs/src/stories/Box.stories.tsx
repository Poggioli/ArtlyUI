import { Box } from "@artly-ui/box";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Box> = {
  title: "Layout components/Box",
  component: Box,
};

const Template: ComponentStory<typeof Box> = ({ ...args }) => (
  <Box css={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
    <Box
      {...args}
      css={{ backgroundColor: "$primary-90", height: "$13", width: "$13" }}
    />
  </Box>
);

export const Default = Template.bind({});
export default story;
