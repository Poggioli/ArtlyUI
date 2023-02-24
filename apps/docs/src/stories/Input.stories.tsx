import { Box } from "@artly-ui/box";
import { Input } from "@artly-ui/input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Input> = {
  title: "Core components/Input",
  component: Input,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    shape: {
      control: {
        type: "radio",
      },
      options: ["standard", "outlined"],
      defaultValue: "standard",
    },
    label: {
      control: {
        type: "text",
      },
      defaultValue: "Enter your e-mail",
    },
    placeholder: {
      control: {
        type: "text",
      },
      defaultValue: "Ex: any@email.com",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    required: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Input> = ({ ...args }) => (
  <Box
    css={{
      margin: "0 auto",
      maxWidth: "180px",
    }}
  >
    <Input {...args} />
  </Box>
);

export const Default = Template.bind({});
export default story;
