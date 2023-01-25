import { Avatar } from "@artly-ui/avatar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Avatar> = {
  title: "Data display components/Avatar",
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
      defaultValue: "https://images.unsplash.com/photo-1561037404-61cd46aa615b",
    },
    ratio: {
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    delayMs: {
      control: {
        type: "number",
      },
      defaultValue: 600,
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "standard", "large", "extraLarge"],
      defaultValue: "standard",
    },
    color: {
      control: {
        type: "radio",
      },
      options: ["primary", "secondary", "accent", "standard"],
      defaultValue: "primary",
    },
  },
};

const Template: ComponentStory<typeof Avatar> = ({ ...args }) => (
  <Avatar {...args}>DG</Avatar>
);

export const Default = Template.bind({});
export default story;
