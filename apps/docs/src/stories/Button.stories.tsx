import { Box } from "@artly-ui/box";
import { Button } from "@artly-ui/button";
import { HeartFilledIcon, PlusIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Button> = {
  title: "Core components/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    shape: {
      control: {
        type: "radio",
      },
      options: ["basic", "stroked", "flat", "icon"],
      defaultValue: "basic",
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["small", "standard", "large"],
      defaultValue: "standard",
    },
    iconPosition: {
      control: {
        type: "radio",
      },
      options: ["left", "right", "none"],
      defaultValue: "none",
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Button> = ({ ...args }) => {
  if (args.shape === "icon") {
    return (
      <Box css={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
        <Button {...args} aria-label="heart icon">
          <HeartFilledIcon />
        </Button>
      </Box>
    );
  }

  if (args.iconPosition !== "none") {
    return (
      <Box css={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
        <Button {...args} icon={<PlusIcon />}>
          Button
        </Button>
      </Box>
    );
  }

  return (
    <Box css={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
      <Button {...args}>Button</Button>
    </Box>
  );
};

export const Default = Template.bind({});
export default story;
