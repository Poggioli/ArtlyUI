import { Flex } from "@artly-ui/flex";
import { Slider, SliderThumb } from "@artly-ui/slider";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Slider> = {
  title: "Core components/Slider",
  component: Slider,
  argTypes: {
    color: {
      options: ["primary", "secondary", "unstyled", "accent", "error"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    min: {
      type: "number",
      defaultValue: 0,
    },
    max: {
      type: "number",
      defaultValue: 100,
    },
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal",
    },
    step: {
      type: "number",
      defaultValue: 1,
    },
    minStepsBetweenThumbs: {
      type: "number",
      defaultValue: 10,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Slider> = ({ ...args }) => (
  <Flex
    direction="column"
    css={{
      height: "100%",
      minHeight: "calc($13 * 4)",
      width: "100%",
      minWidth: "calc($13 * 4)",
      margin: "0 auto",
    }}
  >
    <Slider {...args} defaultValue={[25, 75]}>
      <SliderThumb />
      <SliderThumb />
    </Slider>
  </Flex>
);

export const Default = Template.bind({});
export default story;
