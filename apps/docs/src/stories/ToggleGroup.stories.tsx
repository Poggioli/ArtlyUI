import { Box } from "@artly-ui/box";
import { ToggleGroup, ToggleGroupItem } from "@artly-ui/toggle-group";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof ToggleGroup> = {
  title: "Core components/ToggleGroup",
  component: ToggleGroup,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    type: {
      control: {
        type: "radio",
      },
      options: ["single", "multiple"],
      defaultValue: "single",
    },
    shaded: {
      type: "boolean",
      defaultValue: true,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "standard", "large"],
      defaultValue: "standard",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof ToggleGroup> = ({ ...args }) => (
  <Box
    css={{
      margin: "0 auto",
      width: "fit-content",
    }}
  >
    <ToggleGroup {...args} aria-label="Text alignment">
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  </Box>
);

export const Default = Template.bind({});
export default story;
