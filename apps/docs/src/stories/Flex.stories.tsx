import { Box } from "@artly-ui/box";
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
    css={{
      backgroundColor: "$primary-90",
      height: "calc(4 * $13)",
      width: "100%",
      padding: "$5",
    }}
  >
    <Box
      css={{ backgroundColor: "$secondary-90", height: "$13", width: "$13" }}
    />
    <Box
      css={{ backgroundColor: "$secondary-100", height: "$13", width: "$13" }}
    />
    <Box
      css={{ backgroundColor: "$secondary-200", height: "$13", width: "$13" }}
    />
  </Flex>
);

export const Default = Template.bind({});
export default story;
