import { ToggleGroup } from "@artly-ui/toggle-group";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof ToggleGroup> = {
  title: "Core components/ToggleGroup",
  component: ToggleGroup,
};

const Template: ComponentStory<typeof ToggleGroup> = ({ ...args }) => (
    <ToggleGroup {...args} />
);

export const Default = Template.bind({});
export default story;
