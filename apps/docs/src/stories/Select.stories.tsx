import { Box } from "@artly-ui/box";
import { Select } from "@artly-ui/select";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Select> = {
  title: "Core components/Select",
  component: Select,
  argTypes: {},
};

const Template: ComponentStory<typeof Select> = ({ ...args }) => (
  <Box
    css={{
      margin: "0 auto",
      width: "fit-content",
    }}
  >
    <Select {...args} />
  </Box>
);

export const Default = Template.bind({});
export default story;
