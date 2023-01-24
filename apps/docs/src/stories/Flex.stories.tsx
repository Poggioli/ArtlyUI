import { Flex } from "@artly-ui/flex";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Flex> = {
  title: "Layout components/Flex",
  component: Flex,
  argTypes: {
    direction: {
      control: {
        type: "radio",
      },
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    align: {
      control: {
        type: "radio",
      },
      options: ["center", "start", "end", "flex-start", "flex-end", "baseline"],
    },
    justify: {
      control: {
        type: "radio",
      },
      options: [
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "left",
        "right",
        "normal",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
      ],
    },
    wrap: {
      control: {
        type: "radio",
      },
      options: ["nowrap, wrap, wrap-reverse"],
    },
    gap: {
      control: "text",
    },
    gapX: {
      control: "text",
    },
    gapY: {
      control: "text",
    },
  },
};

const Template: ComponentStory<typeof Flex> = ({ ...args }) => (
  <Flex {...args} css={{ backgroundColor: "$primary-90", height: '500px' }}>
    <h1>Hello, I&apos;m Flex</h1>
    <h1>Hello, I&apos;m Flex</h1>
  </Flex>
);

export const Default = Template.bind({});
export default story;
