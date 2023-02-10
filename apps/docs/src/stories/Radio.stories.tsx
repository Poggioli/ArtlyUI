import {
  Radio
} from "@artly-ui/radio";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Radio> = {
  title: "Core components/Radio",
  component: Radio,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Radio> = ({ ...args }) => {
  return (<Radio {...args} id="radio-1" />);
};

export const Default = Template.bind({});
export default story;
