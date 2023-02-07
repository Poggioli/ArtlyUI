import { Label } from "@artly-ui/label";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Label> = {
  title: "Typograph components/Label",
  component: Label,
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["lead1", "lead2", "body1", "body2", "auxiliary", "caption"],
      defaultValue: "body1",
    },
    align: {
      control: {
        type: "radio",
      },
      options: ["left", "center", "right"],
      defaultValue: "left",
    },
    color: {
      control: {
        type: "text",
      },
    },
  },
};

const Template: ComponentStory<typeof Label> = ({ ...args }) => (
  <Label {...args}>Hello, I&apos;m Label</Label>
);

export const Default = Template.bind({});
export default story;
