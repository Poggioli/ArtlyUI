import { Button } from "@artly-ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@artly-ui/collapsible";
import { Flex } from "@artly-ui/flex";
import { Heading } from "@artly-ui/heading";
import { Separator } from "@artly-ui/separator";
import { Text } from "@artly-ui/text";
import { Tooltip, TooltipContent, TooltipTrigger } from "@artly-ui/tooltip";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

const story: ComponentMeta<typeof Collapsible> = {
  title: "Data display components/Collapsible",
  component: Collapsible,
  argTypes: {},
};

const Template: ComponentStory<typeof Collapsible> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      css={{
        padding: "$4",
        backgroundColor: "$gray-20",
        borderRadius: "$2",
      }}
    >
      <Flex gap="$5" justify="space-between" align="center">
        <Heading level={6}>Profile informations</Heading>
        <Tooltip>
          <TooltipTrigger>
            <CollapsibleTrigger>
              <Button
                shape="icon"
                size="small"
                aria-label={
                  open
                    ? "Hide profile informations"
                    : "Show profile informations"
                }
              >
                {open ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </Button>
            </CollapsibleTrigger>
          </TooltipTrigger>
          <TooltipContent hasArrow={false}>
            {open ? "Hide profile informations" : "Show profile informations"}
          </TooltipContent>
        </Tooltip>
      </Flex>
      <CollapsibleContent>
        <Flex direction="column">
          <Flex
            direction="column"
            gap="$1"
            tabIndex={0}
            aria-label="Name: Amir Baxter"
          >
            <Text variant="auxiliary">Name</Text>
            <Text variant="body2">Amir Baxter</Text>
          </Flex>
          <Separator
            decorative
            css={{
              margin: "$3 0",
            }}
          />
          <Flex
            direction="column"
            gap="$1"
            tabIndex={0}
            aria-label="Age: 31 years old"
          >
            <Text variant="auxiliary">Age</Text>
            <Text variant="body2">31 years</Text>
          </Flex>
          <Separator
            decorative
            css={{
              margin: "$3 0",
            }}
          />
          <Flex
            direction="column"
            gap="$1"
            tabIndex={0}
            aria-label="Occupation: Software Engineer"
          >
            <Text variant="auxiliary">Occupation</Text>
            <Text variant="body2">Software Engineer</Text>
          </Flex>
        </Flex>
      </CollapsibleContent>
    </Collapsible>
  );
};
export const Default = Template.bind({});
export default story;
