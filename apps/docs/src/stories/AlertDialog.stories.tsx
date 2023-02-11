import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogActionContainer,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@artly-ui/alert-dialog";
import { Box } from "@artly-ui/box";
import { Button } from "@artly-ui/button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const story: ComponentMeta<typeof AlertDialog> = {
  title: "Data display components/Alert dialog",
  component: AlertDialog,
  argTypes: {},
};

const Template: ComponentStory<any> = () => (
  <Box css={{ height: "100%", width: "fit-content", margin: "0 auto" }}>
    <AlertDialog>
      <AlertDialogTrigger>
        <Button color="error" shape="flat">
          Delete account
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
        <AlertDialogActionContainer>
          <AlertDialogCancel>
            <Button shape="flat">Cancel</Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button color="error" shape="flat">
              Yes, delete account
            </Button>
          </AlertDialogAction>
        </AlertDialogActionContainer>
      </AlertDialogContent>
    </AlertDialog>
  </Box>
);

export const Default = Template.bind({});
export default story;
