import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { Radio, RadioContainer, RadioItem, RadioLabel } from "@artly-ui/radio";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Radio> = {
  title: "Core components/Radio",
  component: Radio,
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

const Template: ComponentStory<typeof Radio> = ({ ...args }) => {
  return (
    <Flex direction="column" gap="$8" justify="space-evenly" css={{ height: "100%" }}>
      <Flex direction="column" gap="$3" align="center">
        <Heading level={5}>Without label</Heading>
        <Radio {...args}>
          <Flex gap="$7" wrap="wrap" align="center">
            <RadioItem value="radio-1" />
            <RadioItem value="radio-2" />
          </Flex>
        </Radio>
      </Flex>
      <Flex direction="column" gap="$3" align="center">
        <Heading level={5}>With label</Heading>
        <Radio {...args}>
          <Flex gap="$7" wrap="wrap" align="center">
            <RadioContainer>
              <RadioItem id="daily" value="daily" />
              <RadioLabel htmlFor="daily">Daily</RadioLabel>
            </RadioContainer>
            <RadioContainer>
              <RadioItem id="4-hours" value="4-hours" />
              <RadioLabel htmlFor="4-hours">Every 4 hours</RadioLabel>
            </RadioContainer>
            <RadioContainer>
              <RadioItem id="8-hours" value="8-hours" />
              <RadioLabel htmlFor="8-hours">Every 8 hours</RadioLabel>
            </RadioContainer>
            <RadioContainer>
              <RadioItem id="12-hours" value="12-hours" />
              <RadioLabel htmlFor="12-hours">Every 12 hours</RadioLabel>
            </RadioContainer>
          </Flex>
        </Radio>
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});
export default story;
