import { Text } from "@artly-ui/text";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Text> = {
  title: "Typograph components/Text",
  component: Text,
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

const Template: ComponentStory<typeof Text> = ({ ...args }) => (
  <Text {...args}>Hello, I&apos;m Text</Text>
);

export const Default = Template.bind({});
export default story;
