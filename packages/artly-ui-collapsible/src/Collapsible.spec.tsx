import { render } from "@testing-library/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./Collapsible";

describe("Data display component / Collapsible", () => {
  describe("Collapsible trigger", () => {
    it(`GIVEN a Collapsible component
        WHEN asChild props is NOT setted in CollapsibleTrigger
        SHOULD render a button`, () => {
      const rendered = render(
        <Collapsible>
          <CollapsibleTrigger>
            <button>Trigger</button>
          </CollapsibleTrigger>
          <CollapsibleContent>Any Content</CollapsibleContent>
        </Collapsible>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: 'button[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Collapsible component
        WHEN asChild props is setted to false in CollapsibleTrigger
        SHOULD render StyledCollapsibleTrigger`, () => {
      const rendered = render(
        <Collapsible>
          <CollapsibleTrigger asChild={false}>
            <button>Trigger</button>
          </CollapsibleTrigger>
          <CollapsibleContent>Any Content</CollapsibleContent>
        </Collapsible>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: 'button[data-state="closed"] button',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a Collapsible component
        WHEN asChild props is setted to true in CollapsibleTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <Collapsible>
          <CollapsibleTrigger asChild>
            <button>Trigger</button>
          </CollapsibleTrigger>
          <CollapsibleContent>Any Content</CollapsibleContent>
        </Collapsible>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: 'button[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });
  });
});
