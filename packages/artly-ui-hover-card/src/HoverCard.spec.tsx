import { render } from "@testing-library/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";

describe("Core component / HoverCard", () => {
  describe("Arrow", () => {
    it(`GIVEN a HoverCard
        WHEN user set hasArrow to false
        THEN should not show the Arrow`, () => {
      const rendered = render(
        <HoverCard defaultOpen>
          <HoverCardTrigger>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent hasArrow={false}>
            <h3>HoverCard content</h3>
          </HoverCardContent>
        </HoverCard>
      );

      const arrow = rendered.queryByTestId("arrow");
      expect(arrow).not.toBeInTheDocument();
    });

    it(`GIVEN a HoverCard
        WHEN user set hasArrow to true
        THEN should show the Arrow`, () => {
      const rendered = render(
        <HoverCard defaultOpen>
          <HoverCardTrigger>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent hasArrow>
            <h3>HoverCard content</h3>
          </HoverCardContent>
        </HoverCard>
      );

      const arrow = rendered.getByTestId("arrow");
      expect(arrow).toBeInTheDocument();
    });
  });

  describe("HoverCard Trigger", () => {
    it(`GIVEN a HoverCard component
        WHEN asChild props is NOT setted in HoverCardTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <HoverCard>
          <HoverCardTrigger>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent>
            <span>HoverCard content</span>
          </HoverCardContent>
        </HoverCard>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a HoverCard component
        WHEN asChild props is setted to false in HoverCardTrigger
        SHOULD render StyledHoverCardTrigger`, () => {
      const rendered = render(
        <HoverCard>
          <HoverCardTrigger asChild={false}>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent>
            <span>HoverCard content</span>
          </HoverCardContent>
        </HoverCard>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"] button',
      });
      expect(triggerButton).toBeVisible();
    });

    it(`GIVEN a HoverCard component
        WHEN asChild props is setted to true in HoverCardTrigger
        SHOULD render the children component`, () => {
      const rendered = render(
        <HoverCard>
          <HoverCardTrigger asChild>
            <button>Trigger</button>
          </HoverCardTrigger>
          <HoverCardContent>
            <span>HoverCard content</span>
          </HoverCardContent>
        </HoverCard>
      );

      const triggerButton = rendered.getByText("Trigger", {
        selector: '[data-state="closed"]',
      });
      expect(triggerButton).toBeVisible();
    });
  });
});
