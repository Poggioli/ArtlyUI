import { Avatar } from "@artly-ui/avatar";
import { Button } from "@artly-ui/button";
import {
  Card,
  CardContainerAction,
  CardDescription,
  CardSubtitle,
  CardTitle,
} from "@artly-ui/card";
import { Flex } from "@artly-ui/flex";
import { Image } from "@artly-ui/image";
import {
  PlayIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Card> = {
  title: "Layout components/Card",
  component: Card,
  argTypes: {
    shaded: {
      type: "boolean",
      defaultValue: true,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
  },
};

const Template: ComponentStory<typeof Card> = ({ ...args }) => {
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      gap="$9"
      css={{ height: "100%" }}
    >
      <Card {...args} css={{ maxWidth: "calc($13 * 2.5)" }}>
        <Flex gap="$1" direction="column" css={{ padding: "$4" }}>
          <CardSubtitle css={{ marginBottom: "$2" }}>
            Word of the Day
          </CardSubtitle>
          <CardTitle>benevolent</CardTitle>
          <CardSubtitle>adjective</CardSubtitle>
          <CardDescription css={{ marginTop: "$4" }}>
            well meaning and kindly. &quot;a benevolent smile&quot;
          </CardDescription>
        </Flex>
        <Flex css={{ padding: "0 0 $3 $3" }}>
          <CardContainerAction>
            <Button color="primary" shape="basic">
              LEARN MORE
            </Button>
          </CardContainerAction>
        </Flex>
      </Card>

      <Card {...args} css={{ maxWidth: "calc($13 * 3)" }}>
        <Flex gap="$4" wrap="nowrap" css={{ padding: "$4" }}>
          <Avatar
            ratio={1}
            src="https://images.unsplash.com/photo-1561037404-61cd46aa615b"
          >
            DG
          </Avatar>
          <Flex direction="column" gap="$2" css={{ flex: 1 }}>
            <CardTitle>Shrimp and Chorizo Paella</CardTitle>
            <CardSubtitle>September 14, 2016</CardSubtitle>
          </Flex>
        </Flex>

        <Image
          src="https://mui.com/static/images/cards/paella.jpg"
          alt="A dog"
        />
        <Flex css={{ padding: "$4" }}>
          <CardDescription>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </CardDescription>
        </Flex>
        <CardContainerAction css={{ padding: "0 0 $3 $3" }}>
          <Button color="primary" shape="basic">
            LEARN MORE
          </Button>
          <Button color="primary" shape="basic">
            SHARE
          </Button>
        </CardContainerAction>
      </Card>

      <Card {...args} css={{ maxWidth: "calc($13 * 3)" }}>
        <Image
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="A dog"
          css={{
            borderTopLeftRadius: "$2",
            borderTopRightRadius: "$2",
          }}
        />
        <Flex gap="$4" direction="column" css={{ padding: "$4" }}>
          <CardTitle>Lizard</CardTitle>
          <CardDescription>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </CardDescription>
        </Flex>
        <CardContainerAction css={{ padding: "0 0 $3 $3" }}>
          <Button color="primary" shape="basic">
            SHARE
          </Button>
          <Button color="primary" shape="basic">
            LEARN MORE
          </Button>
        </CardContainerAction>
      </Card>

      <Card {...args} css={{ maxWidth: "calc($13 * 3)", width: "100%" }}>
        <Flex wrap="nowrap" gap="$5" css={{ width: "100%" }}>
          <Flex direction="column">
            <Flex direction="column" css={{ padding: "$4" }}>
              <CardTitle>Addams Family</CardTitle>
              <CardSubtitle>Songs for cockatiel</CardSubtitle>
            </Flex>
            <CardContainerAction wrap="nowrap" css={{ padding: "0 0 $3 $3" }}>
              <Button shape="icon" color="secondary" aria-label="Previous song">
                <TrackPreviousIcon />
              </Button>
              <Button shape="icon" color="secondary" aria-label="Play song">
                <PlayIcon />
              </Button>
              <Button shape="icon" color="secondary" aria-label="Next song">
                <TrackNextIcon />
              </Button>
            </CardContainerAction>
          </Flex>
          <Image
            src="https://images.unsplash.com/photo-1610906403539-eba004635227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt="A Cockatiel"
            ratio={16 / 5}
            css={{
              backgroundPosition: "center center",
              borderTopRightRadius: "$2",
              borderBottomRightRadius: "$2",
            }}
          />
        </Flex>
      </Card>

      <Card
        {...args}
        css={{ maxWidth: "calc($13 * 2.5)" }}
        as="a"
        href="https://github.com/Poggioli"
      >
        <Image
          src="https://avatars.githubusercontent.com/u/14229296?v=4"
          alt="João Poggioli Photo"
          css={{
            borderTopLeftRadius: "$2",
            borderTopRightRadius: "$2",
          }}
        />
        <Flex gap="$1" direction="column" css={{ padding: "$4" }}>
          <CardTitle>João Vitor Pogiolli</CardTitle>
          <CardSubtitle css={{ marginBottom: "$4" }}>@Poggioli</CardSubtitle>
          <CardDescription>
            A young man passionate about solving problems using technology. My
            main mission is to be able to help my teammates, friends and family.
            I am passionate about birds, JavaScript, Front-end and very curious
            about UI / UX.
          </CardDescription>
        </Flex>
      </Card>
    </Flex>
  );
};

export const Default = Template.bind({});
export default story;

// Card, CardTitle, CardSubtitle, CardDescription, CardContainerAction
