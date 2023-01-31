import { Button } from "@artly-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@artly-ui/popover";
import { Text } from "@artly-ui/text";
import { Share1Icon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof PopoverContent> = {
  title: "Data display components/Popover",
  component: Popover,
  argTypes: {
    hasCloseIcon: {
      type: "boolean",
      defaultValue: true,
    },
  },
};

const Template: ComponentStory<typeof Popover> = ({ ...args }) => (
  <Popover>
    <PopoverTrigger>
      <Button
        shape="icon"
        aria-label="Share this article in your social medias"
      >
        <Share1Icon />
      </Button>
    </PopoverTrigger>
    <PopoverContent {...args}>
      <Text
        variant="body2"
        css={{
          maxWidth: "calc($13 * 2)",
          display: "inline-block",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet
        fermentum augue. Proin tincidunt sem vel orci pellentesque ultricies.
        Praesent sagittis nisl vitae dictum pretium. Etiam malesuada leo ut.
      </Text>
    </PopoverContent>
  </Popover>
);

export const Default = Template.bind({});
export default story;
