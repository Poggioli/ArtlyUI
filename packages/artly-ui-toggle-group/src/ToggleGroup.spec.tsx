import { render } from "@testing-library/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

describe("Core component / ToggleGroup", () => {
  it(`GIVEN a ToggleGroup component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(
      <ToggleGroup type="single" aria-label="Text alignment">
        <ToggleGroupItem value="left" aria-label="Left aligned">
          Left
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Center aligned">
          Center
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Right aligned">
          Right
        </ToggleGroupItem>
      </ToggleGroup>
    );
    expect(rendered.container).toBeTruthy();
  });
});
