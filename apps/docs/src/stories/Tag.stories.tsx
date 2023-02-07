import { Tag } from "@artly-ui/tag";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Tag> = {
  title: "Data display components/Tag",
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "standard"],
      defaultValue: "standard",
    },
  },
};

const Template: ComponentStory<typeof Tag> = ({ ...args }) => (
  <Tag {...args}>Tag Component</Tag>
);

export const Default = Template.bind({});
export default story;
