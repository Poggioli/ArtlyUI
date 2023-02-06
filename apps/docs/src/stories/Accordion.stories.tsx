import {
  Accordion,
  AccordionChevron,
  AccordionContent,
  AccordionHeader,
  AccordionHeaderTitle,
  AccordionItem,
  AccordionTrigger,
} from "@artly-ui/accordion";
import { Box } from "@artly-ui/box";
import { Text } from "@artly-ui/text";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Accordion> = {
  title: "Data display components/Accordion",
  component: Accordion,
  argTypes: {
    shaded: {
      type: "boolean",
      defaultValue: true,
    },
    bordered: {
      type: "boolean",
      defaultValue: true,
    },
    type: {
      options: ["single", "multiple"],
      control: { type: "radio" },
      defaultValue: "single",
    },
    padded: {
      type: "boolean",
      defaultValue: true,
    },
    collapsible: {
      type: "boolean",
      defaultValue: true,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Accordion> = ({
  disabled,
  bordered,
  shaded,
  type,
  padded,
  collapsible,
  ...args
}) => (
  <Box css={{ height: "100%" }}>
    <Accordion
      type={type}
      disabled={disabled}
      collapsible={collapsible}
      shaded={shaded}
      bordered={bordered}
    >
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionHeaderTitle>Is it accessible?</AccordionHeaderTitle>
          <AccordionChevron />
        </AccordionHeader>
        <AccordionContent padded={padded}>
          <Text as="p" variant="body2">
            Yes. It adheres to the WAI-ARIA design pattern.
          </Text>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionHeaderTitle>Is it unstyled?</AccordionHeaderTitle>
          <AccordionChevron />
        </AccordionHeader>
        <AccordionContent padded={padded}>
          <Text as="p" variant="body2">
            Yes. Its unstyled by default, giving you freedom over the look and
            feel.
          </Text>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionHeader>
          <AccordionHeaderTitle>Can it be animated?</AccordionHeaderTitle>
          <AccordionChevron />
        </AccordionHeader>
        <AccordionContent padded={padded}>
          <Text as="p" variant="body2">
            Yes! You can animate the Accordion with CSS or JavaScript.
          </Text>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" disabled>
        <AccordionHeader>
          <AccordionHeaderTitle>
            Can I disable only one accordion Item? Yes, Im disabled
          </AccordionHeaderTitle>
          <AccordionChevron />
        </AccordionHeader>
        <AccordionContent padded={padded}>
          <Text as="p" variant="body2">
            Im disabled
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </Box>
);

export const Default = Template.bind({});
export default story;
