import { ProgressBar } from "@artly-ui/progress-bar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof ProgressBar> = {
  title: "Data display components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    shape: {
      control: {
        type: "radio",
      },
      options: ["flat", "rounded", "soft"],
      defaultValue: "soft",
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "accent", "error"],
      defaultValue: "primary",
    },
    value: {
      control: {
        type: "number",
        max: 100,
      },
    },
  },
};

const Template: ComponentStory<typeof ProgressBar> = ({ ...args }) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
export default story;
