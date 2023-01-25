import { Box } from "@artly-ui/box";
import { Flex } from "@artly-ui/flex";
import { Separator } from "@artly-ui/separator";
import { Text } from "@artly-ui/text";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Separator> = {
  title: "Layout components/Separator",
  component: Separator,
  argTypes: {
    colored: {
      type: 'boolean',
      defaultValue: false
    }
  }
};

const Template: ComponentStory<typeof Separator> = ({ ...args }) => (
  <Box
    css={{
      width: '100%',
      margin: '0 $4',
      padding: '$4'
    }}
  >
    <Text color='$grey-200'>Horizontal separator.</Text>
    <Separator css={{ margin: '15px 0' }} {...args} />
    <Flex css={{ height: 20, alignItems: 'center' }}>
      <Text color='$grey-200'>Vertical separator</Text>
      <Separator decorative orientation='vertical' css={{ margin: '0 $4' }} {...args} />
      <Text color='$grey-200'>Vertical separator</Text>
    </Flex>
  </Box>
);

export const Default = Template.bind({});
export default story;
