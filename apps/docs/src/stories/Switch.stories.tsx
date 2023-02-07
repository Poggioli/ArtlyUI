import { Box } from "@artly-ui/box";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { Switch, SwitchContainer, SwitchLabel } from "@artly-ui/switch";
import { BellIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Switch> = {
  title: "Core components/Switch",
  component: Switch,
  argTypes: {
    color: {
      options: ["primary", "secondary", "unstyled", "accent", "error"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Switch> = ({ ...args }) => (
  <Flex direction="column" justify="space-evenly" css={{ height: "100%" }}>
    <Flex direction="column" gap="$5" align="center">
      <Heading level={5}>Without label</Heading>
      <Switch {...args} />
    </Flex>
    <Flex direction="column" gap="$5" align="center">
      <Heading level={5}>With label</Heading>
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-airplane">
          <Box
            css={{
              marginRight: "$3",
              height: "$4",
              width: "$4",
              marginBottom: "$2",
            }}
          >
            <BellIcon />
          </Box>
          Notifications
        </SwitchLabel>
        <Switch {...args} id="switch-airplane" />
      </SwitchContainer>
    </Flex>
  </Flex>
);

export const Default = Template.bind({});
export default story;
