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
    iconPosition: {
      control: {
        type: "radio",
      },
      options: ["left", "right"],
      defaultValue: "left",
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
    truncated: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
  },
};

const Template: ComponentStory<typeof Tag> = ({ ...args }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      css={{ height: "100%" }}
    >
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          Without icon
        </Heading>
        <Tag {...args}>Tag Component</Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          With icon
        </Heading>
        <Tag {...args} icon={<AccessibilityIcon />}>
          Tag Component
        </Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          Deletable tag
        </Heading>
        <Tag {...args} onDelete={() => alert("delete")}>
          Deletable tag
        </Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          Tag as link
        </Heading>
        <Tag {...args} as="a" href="https://storybook.js.org/">
          Tag Component
        </Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          Tag with large content inside
        </Heading>
        <Tag {...args}>Tag Component with large content inside</Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          Tag with large content inside and icon
        </Heading>
        <Tag {...args} icon={<AccessibilityIcon />}>
          Tag Component with large content inside
        </Tag>
      </Flex>
      <Flex direction="column" gap="$5" align="center">
        <Heading level={5} css={{ textAlign: "center" }}>
          Tag as button
        </Heading>
        <Tag {...args} as="button" onClick={() => alert("button")}>
          Tag Component button
        </Tag>
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});
export default story;
