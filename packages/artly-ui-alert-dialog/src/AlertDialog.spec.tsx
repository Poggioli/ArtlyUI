import { render } from "@testing-library/react";
import { AlertDialog } from "./AlertDialog";

describe("Core component / AlertDialog", () => {
  it(`GIVEN a AlertDialog component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(<AlertDialog />);
    expect(rendered.container).toBeTruthy();
  });
});
