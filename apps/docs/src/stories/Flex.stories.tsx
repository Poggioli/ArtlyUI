import { Box } from "@artly-ui/box";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
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
      defaultValue: "row",
    },
    align: {
      control: {
        type: "radio",
      },
      options: ["center", "start", "end", "flex-start", "flex-end", "baseline"],
      defaultValue: "flex-start",
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
      defaultValue: "flex-start",
    },
    wrap: {
      control: {
        type: "radio",
      },
      options: ["nowrap", "wrap", "wrap-reverse"],
      defaultValue: "wrap",
    },
    gap: {
      control: "text",
      defaultValue: "",
    },
    gapX: {
      control: "text",
      defaultValue: "",
    },
    gapY: {
      control: "text",
      defaultValue: "",
    },
  },
};

const Template: ComponentStory<typeof Flex> = ({ ...args }) => (
  <Flex
    {...args}
    css={{ backgroundColor: "$primary-90", height: "500px", padding: "$5" }}
  >
    <Box css={{ backgroundColor: "$white-90", padding: "$4" }}>
      <Heading color="$gray-10" level={5}>
        Hello, I&apos;m Box 1
      </Heading>
    </Box>
    <Box css={{ backgroundColor: "$white-100", padding: "$4" }}>
      <Heading color="$gray-10" level={5}>
        Hello, I&apos;m Box 2
      </Heading>
    </Box>
    <Box css={{ backgroundColor: "$white-200", padding: "$4" }}>
      <Heading color="$gray-10" level={5}>
        Hello, I&apos;m Box 3
      </Heading>
    </Box>
  </Flex>
);

export const Default = Template.bind({});
export default story;
