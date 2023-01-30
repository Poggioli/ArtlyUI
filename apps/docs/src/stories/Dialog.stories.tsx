import { Button } from "@artly-ui/button";
import {
  Dialog, DialogActionContainer, DialogClose, DialogContent,
  DialogDescription, DialogTitle, DialogTrigger
} from "@artly-ui/dialog";
import { Flex } from "@artly-ui/flex";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FC, PropsWithChildren } from "react";

const TextDialog: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Tall Dialog</DialogTitle>
        <DialogDescription>
          {Array(10)
            .fill(
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec lectus ut turpis congue
          mattis vitae nec nibh. Duis pretium velit eget diam semper, id auctor dui congue. In at
          vestibulum odio. Maecenas imperdiet sodales leo, eu hendrerit ligula tempus at. Aenean at
          justo nec diam pretium interdum sed quis diam. Vivamus rutrum nulla sed facilisis
          vulputate. Fusce consequat turpis ante, non tincidunt lacus feugiat ornare.`
            )
            .join(" ")}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

const SimpleDialog: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>Simple Dialog</DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec
          lectus ut turpis congue mattis vitae nec nibh. Duis pretium velit eget
          diam semper, id auctor dui congue. In at vestibulum odio. Maecenas
          imperdiet sodales leo, eu hendrerit ligula tempus at. Aenean at justo
          nec diam pretium interdum sed quis diam. Vivamus rutrum nulla sed
          facilisis vulputate. Fusce consequat turpis ante, non tincidunt lacus
          feugiat ornare.
        </DialogDescription>
        <DialogActionContainer justify="flex-end">
          <DialogClose asChild>
            <Button color="accent">OK</Button>
          </DialogClose>
        </DialogActionContainer>
      </DialogContent>
    </Dialog>
  );
};

const story: ComponentMeta<typeof Dialog> = {
  title: "Data display components/Dialog",
  component: Dialog,
  argTypes: {},
};

const Template: ComponentStory<any> = () => (
  <Flex justify="space-evenly" css={{ flex: 1 }}>
    <SimpleDialog>
      <Button shape="stroked" color="primary">
        Simple
      </Button>
    </SimpleDialog>
    <TextDialog>
      <Button shape="stroked" color="primary">
        Tall Dialog
      </Button>
    </TextDialog>
  </Flex>
);

export const Default = Template.bind({});
export default story;
