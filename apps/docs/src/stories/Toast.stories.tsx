import { Button } from "@artly-ui/button";
import { Flex } from "@artly-ui/flex";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle
} from "@artly-ui/toast";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useRef, useState } from "react";

const story: ComponentMeta<typeof Toast> = {
  title: "Data display components/Toast",
  component: Toast,
  argTypes: {
    horizontal: {
      control: {
        type: "radio",
      },
      options: ["left", "center", "right"],
      defaultValue: "center",
    },
    vertical: {
      control: {
        type: "radio",
      },
      options: ["top", "center", "bottom"],
      defaultValue: "bottom",
    },
    custom: {
      type: "boolean",
      defaultValue: false,
    },
  },
};

const Template: ComponentStory<typeof Toast> = ({ ...args }) => {
  const [open, setOpen] = useState<boolean>(false);
  const timerRef = useRef<number>(0);

  if (args.custom) {
    return (
      <ToastProvider swipeDirection="right" duration={3000}>
        <Button
          color="primary"
          shape="stroked"
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Add to calendar
        </Button>
        <Toast
          {...args}
          open={open}
          onOpenChange={setOpen}
          css={{
            backgroundColor: "$accent-90",
            padding: "$4",
          }}
        >
          <ToastDescription
            css={{
              color: "$white-300",
            }}
          >
            Task added to calendar
          </ToastDescription>
        </Toast>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider swipeDirection="right" duration={3000}>
      <Button
        color="primary"
        shape="stroked"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </Button>
      <Toast {...args} open={open} onOpenChange={setOpen}>
        <Flex gap="$4" align="center">
          <Flex gap="$3" direction="column">
            <ToastTitle>Scheduled: Catch up</ToastTitle>
            <ToastDescription>
              {(() => {
                const today = new Date();
                const inOneWeek = today.setDate(today.getDate() + 7);
                return new Date(inOneWeek).toISOString();
              })()}
            </ToastDescription>
          </Flex>

          <ToastAction altText="cancel scheduled" asChild>
            <Button size="small" color="secondary" shape="stroked">
              undo
            </Button>
          </ToastAction>
        </Flex>
      </Toast>
    </ToastProvider>
  );
};

export const Default = Template.bind({});
export default story;
