import { Button } from "@artly-ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@artly-ui/tooltip";
import { EnvelopeClosedIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Tooltip> = {
  title: "Data display components/Tooltip",
  component: Tooltip,
  argTypes: {
    direction: {
      control: {
        type: "radio",
      },
      options: ["row", "row-reverse", "column", "column-reverse"],
      defaultValue: "row",
    },
    align: {
      control: {
        type: "radio",
      },
      options: ["center", "start", "end", "flex-start", "flex-end", "baseline"],
      defaultValue: "start",
    },
    justify: {
      control: {
        type: "radio",
      },
      options: [
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "left",
        "right",
        "normal",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
      ],
      defaultValue: "center",
    },
    wrap: {
      control: {
        type: "radio",
      },
      options: ["nowrap", "wrap", "wrap-reverse"],
      defaultValue: "nowrap",
    },
    gap: {
      control: "text",
    },
    gapX: {
      control: "text",
    },
    gapY: {
      control: "text",
    },
    text: {
      control: "text",
      defaultValue: "Hello I'm tooltip",
    },
    hasIcon: {
      control: "boolean",
      defaultValue: false,
    },
    hasArrow: {
      control: "boolean",
      defaultValue: true,
    },
    css: {
      control: {
        type: "object",
      },
      defaultValue: {
        maxWidth: "350px",
      },
    },
  },
};

const Template: ComponentStory<typeof Tooltip> = ({ ...args }) => (
  <Tooltip>
    <TooltipTrigger>
      <Button shape="icon" aria-label="Mark as unread">
        <EnvelopeClosedIcon />
      </Button>
    </TooltipTrigger>
    <TooltipContent
      {...args}
      direction={args.direction}
      align={args.align}
      justify={args.justify}
      wrap={args.wrap}
      templateColumns={args.templateColumns}
      templateRows={args.templateRows}
      gap={args.gap}
      gapX={args.gapX}
      gapY={args.gapY}
      icon={args.hasIcon ? <InfoCircledIcon /> : null}
      css={args.css}
    >
      {args.text}
    </TooltipContent>
  </Tooltip>
);

export const Default = Template.bind({});
export default story;
