import {
  Checkbox,
  CheckboxContainer,
  CheckboxGroup,
  CheckboxLabel
} from "@artly-ui/checkbox";
import { Container } from "@artly-ui/container";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

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

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => {
  const [valueGroup, setValueGroup] = useState<string[]>([]);

  return (
    <Flex gap="$8" direction="column" justify="space-evenly" css={{ height: "100%" }}>
      <Flex direction="column" gap="$3" align="center">
        <Heading level={5}>Without label</Heading>
        <Checkbox {...args} />
      </Flex>
      <Flex direction="column" gap="$3" align="center">
        <Heading level={5}>With label</Heading>
        <CheckboxContainer>
          <Checkbox {...args} id="checkbox-1" />
          <CheckboxLabel htmlFor="checkbox-1">
            I have read and agree to the terms of use
          </CheckboxLabel>
        </CheckboxContainer>
      </Flex>

      <Flex direction="column" gap="$3" align="center">
        <Heading level={5}>Checkbox Group</Heading>
        <Container size="medium">
          <CheckboxGroup
            disabled={args.disabled}
            color={args.color}
            value={valueGroup}
            onChangeValue={setValueGroup}
          >
            <Flex gap="$7" wrap="wrap">
              <CheckboxContainer>
                <Checkbox value="dog" id="checkbox-group-1" />
                <CheckboxLabel htmlFor="checkbox-group-1">Dog</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="cat" id="checkbox-group-2" />
                <CheckboxLabel htmlFor="checkbox-group-2">Cat</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="bird" id="checkbox-group-3" />
                <CheckboxLabel htmlFor="checkbox-group-3">Bird</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="rabbit" id="checkbox-group-4" />
                <CheckboxLabel htmlFor="checkbox-group-4">Rabbit</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="fish" id="checkbox-group-5" />
                <CheckboxLabel htmlFor="checkbox-group-5">Fish</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="lizard" id="checkbox-group-6" />
                <CheckboxLabel htmlFor="checkbox-group-6">Lizard</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="horse" id="checkbox-group-7" />
                <CheckboxLabel htmlFor="checkbox-group-7">Horse</CheckboxLabel>
              </CheckboxContainer>
              <CheckboxContainer>
                <Checkbox value="cow" id="checkbox-group-8" />
                <CheckboxLabel htmlFor="checkbox-group-8">Cow</CheckboxLabel>
              </CheckboxContainer>
            </Flex>
          </CheckboxGroup>
        </Container>
      </Flex>
    </Flex>
  );
};

export const Default = Template.bind({});
export default story;
