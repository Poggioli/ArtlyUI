import { Badge } from "@artly-ui/badge";
import { Box } from "@artly-ui/box";
import { BellIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Badge> = {
  title: "Data display components/Badge",
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    count: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
    maxCount: {
      control: {
        type: "number",
      },
      defaultValue: 99,
    },
    horizontalPosition: {
      control: {
        type: "radio",
      },
      options: ["left", "right"],
      defaultValue: "right",
    },
    verticalPosition: {
      control: {
        type: "radio",
      },
      options: ["top", "bottom"],
      defaultValue: "top",
    },
    dot: {
      type: "boolean",
      defaultValue: false,
    },
    showZero: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Badge> = ({ ...args }) => (
  <Badge {...args}>
    <Box
      css={{
        svg: {
          fill: "$text-high-contrast",
          color: "$text-high-contrast",
        },
      }}
    >
      <BellIcon width={24} height={24} />
    </Box>
  </Badge>
);

export const Default = Template.bind({});
export default story;
