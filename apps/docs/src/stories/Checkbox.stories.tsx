import { Checkbox } from "@artly-ui/checkbox";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Checkbox> = {
  title: "Core components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
export default story;
