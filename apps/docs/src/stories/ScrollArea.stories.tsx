import { Box } from "@artly-ui/box";
import { Container } from "@artly-ui/container";
import { Flex } from "@artly-ui/flex";
import { ScrollArea } from "@artly-ui/scroll-area";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof ScrollArea> = {
  title: "Layout components/ScrollArea",
  component: ScrollArea,
  argTypes: {
    orientation: {
      control: {
        type: "radio",
      },
      options: ["vertical", "horizontal"],
      defaultValue: "vertical",
    },
    dir: {
      control: {
        type: "radio",
      },
      options: ["ltr", "rtl"],
      defaultValue: "ltr",
    },
    type: {
      control: {
        type: "radio",
      },
      options: ["hover", "auto", "always", "scroll"],
      defaultValue: "hover",
    },
  },
};

const Template: ComponentStory<typeof ScrollArea> = ({ ...args }) => (
  <Container size="large">
    <ScrollArea {...args} css={{ height: "80vh" }}>
      <Flex
        direction={args.orientation === "horizontal" ? "row" : "column"}
        wrap="nowrap"
        gap="$4"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Box
            css={{
              backgroundColor: "$primary-90",
              height: "$13",
              width: "$13",
            }}
            key={i + 1}
          />
        ))}
      </Flex>
    </ScrollArea>
  </Container>
);

export const Default = Template.bind({});
export default story;
