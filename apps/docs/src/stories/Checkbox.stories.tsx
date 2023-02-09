import { Checkbox, CheckboxContainer, CheckboxLabel } from "@artly-ui/checkbox";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Checkbox> = {
  title: "Core components/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => (
  <Flex direction="column" justify="space-evenly" css={{ height: "100%" }}>
    <Flex direction="column" gap="$5" align="center">
      <Heading level={5}>Without label</Heading>
      <Checkbox {...args} />
    </Flex>
    <Flex direction="column" gap="$5" align="center">
      <Heading level={5}>With label</Heading>
      <CheckboxContainer>
        <Checkbox {...args} id="checkbox-airplane" />
        <CheckboxLabel htmlFor="checkbox-airplane">
          I have read and agree to the terms of use
        </CheckboxLabel>
      </CheckboxContainer>
    </Flex>
  </Flex>
);

export const Default = Template.bind({});
export default story;
