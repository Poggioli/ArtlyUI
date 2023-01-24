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
    },
    shape: {
      control: {
        type: "radio",
      },
      options: ["basic", "stroked", "flat", "icon"],
    },
    iconPosition: {
      control: {
        type: "radio",
      },
      options: ["left", "right", "none"],
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
      <Button {...args} aria-label="heart icon">
        <HeartFilledIcon />
      </Button>
    );
  }

  if (args.iconPosition !== "none") {
    return (
      <Button {...args} icon={<PlusIcon />}>
        Button
      </Button>
    );
  }

  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});
export default story;
