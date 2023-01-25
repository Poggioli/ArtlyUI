import { Heading } from "@artly-ui/heading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Heading> = {
  title: "Typograph components/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: "radio",
      },
      options: ["1", "2", "3", "4", "5", "6"],
    },
    color: {
      control: {
        type: "text",
      },
    },
  },
};

const Template: ComponentStory<typeof Heading> = ({ ...args }) => (
  <Heading {...args}>Hello, I&apos;m Heading</Heading>
);

export const Default = Template.bind({});
export default story;
