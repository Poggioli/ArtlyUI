import { Container } from "@artly-ui/container";
import { Flex } from "@artly-ui/flex";
import { ScrollArea } from "@artly-ui/scroll-area";
import { heading3 } from "@artly-ui/tokens";
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
    },
    type: {
      control: {
        type: "radio",
      },
      options: ["hover", "auto", "always", "scroll"],
    },
  },
};

const Template: ComponentStory<typeof ScrollArea> = ({ ...args }) => (
  <Container size="large">
    <ScrollArea {...args} css={{ height: "80vh" }}>
      <Flex
        direction={args.orientation === "horizontal" ? "row" : "column"}
        gap="$4"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Flex
            justify="center"
            align="center"
            css={{
              backgroundColor: "$primary-90",
              height: "$13",
              width: "$13",
              ...heading3,
              color: "$gray-10",
            }}
            key={i + 1}
          >
            {i + 1}
          </Flex>
        ))}
      </Flex>
    </ScrollArea>
  </Container>
);

export const Default = Template.bind({});
export default story;
