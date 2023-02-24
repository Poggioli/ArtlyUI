import { Box } from "@artly-ui/box";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectGroupSeparator,
  SelectItem,
  SelectTrigger,
} from "@artly-ui/select";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof Select> = {
  title: "Core components/Select",
  component: Select,
  argTypes: {
    color: {
      control: {
        type: "radio",
      },
      options: ["unstyled", "primary", "secondary", "accent", "error"],
      defaultValue: "unstyled",
    },
    disabled: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    shape: {
      control: {
        type: "radio",
      },
      options: ["standard", "outlined"],
      defaultValue: "standard",
    },
  },
};

const Template: ComponentStory<typeof Select> = ({ ...args }) => (
  <Box
    css={{
      margin: "0 auto",
      maxWidth: "180px",
    }}
  >
    <Select {...args}>
      <SelectTrigger placeholder="Select a fruit" />

      <SelectContent>
        <SelectGroup>
          <SelectGroupLabel>Fruits</SelectGroupLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectGroupSeparator />
        <SelectGroup>
          <SelectGroupLabel>Vegetables</SelectGroupLabel>
          <SelectItem value="aubergine">Aubergine</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="carrot" disabled>
            Carrot
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Box>
);

export const Default = Template.bind({});
export default story;
