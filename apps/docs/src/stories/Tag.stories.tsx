import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { Tag } from "@artly-ui/tag";
import { AccessibilityIcon } from "@radix-ui/react-icons";
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
    variant: {
      control: {
        type: "radio",
      },
      options: ["filled", "outlined"],
      defaultValue: "filled",
    },
  },
};

const Template: ComponentStory<typeof Tag> = ({ ...args }) => {
  return (
    <Flex direction="column" justify="space-evenly" css={{ height: "100%" }}>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5}>Without icon</Heading>
        <Tag {...args}>Tag Component</Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5}>With icon</Heading>
        <Tag {...args} icon={<AccessibilityIcon />}>
          Tag Component
        </Tag>
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});
export default story;
