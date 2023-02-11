import { deepPurpleAndAmberTheme } from "@artly-ui/core";
import { render } from "@testing-library/react";
import { ArtlyProvider } from "./ArtlyProvider";

describe("Core component / ArtlyProvider", () => {
  it(`GIVEN a ArtlyProvider component
      WHEN render component
      SHOULD occurs render normaly`, () => {
    const labelValue = "Lapo provider";

    render(
      <ArtlyProvider>
        <h1>{labelValue}</h1>
      </ArtlyProvider>
    );
    const container = document.querySelector(
      `.${deepPurpleAndAmberTheme.className}`
    );
    expect(container).toBeTruthy();
  });
});
