import { Avatar } from "@artly-ui/avatar";
import { Box } from "@artly-ui/box";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@artly-ui/hover-card";
import { Text } from "@artly-ui/text";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<any> = {
  title: "Data display components/HoverCard",
  component: HoverCard,
  argTypes: {},
};

const Template: ComponentStory<typeof HoverCard> = () => (
  <Box css={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
    <HoverCard>
      <HoverCardTrigger>
        <Text
          as="a"
          color="$text-high-contrast"
          href="https://github.com/Poggioli"
          css={{
            all: "unset",
            cursor: "pointer",
            borderRadius: "100%",
            display: "inline-block",

            "*": {
              fill: "$text-high-contrast",
            },
          }}
        >
          <GitHubLogoIcon width={30} height={30} />
        </Text>
      </HoverCardTrigger>
      <HoverCardContent>
        <Flex direction="column" gap="$3">
          <Avatar
            size="large"
            color="primary"
            delayMs={600}
            ratio={1}
            src="https://avatars.githubusercontent.com/u/14229296?v=4"
          >
            JVP
          </Avatar>
          <Flex direction="column" gap="$4">
            <Box>
              <Heading level={6}>
                <strong>João Vitor Pogiolli</strong>
              </Heading>
              <Text as="a" href="https://github.com/Poggioli" color="$gray-100">
                @Poggioli
              </Text>
            </Box>
            <Text as="p" color="$text-low-contrast">
              Passionate about Front-End development, problem solving, UI/UX, my
              family, girlfriend, friends and birds.
            </Text>
            <Flex gap="$4">
              <Flex gap="$2">
                <Text as="p">
                  9 <Text color="$text-low-contrast">Following</Text>
                </Text>
              </Flex>
              <Flex css={{ gap: 5 }}>
                <Text as="p">
                  12 <Text color="$text-low-contrast">Followers</Text>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </HoverCardContent>
    </HoverCard>
  </Box>
);

export const Default = Template.bind({});
export default story;
