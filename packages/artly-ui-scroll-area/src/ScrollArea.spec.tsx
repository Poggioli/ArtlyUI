import { render } from "@testing-library/react";
import { ScrollArea } from "./ScrollArea";

describe("Layout component / ScrollArea", () => {
  it(`GIVEN a ScrollArea component
      WHEN render component without orientation
      SHOULD render an scrollArea horizontal orientation`, () => {
    const rendered = render(
      <div>
        <ScrollArea css={{ width: "calc($13 + $7)" }}>
          <div>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
    expect(rendered.container.querySelector('[data-orientation="horizontal"]'));
  });

  it(`GIVEN a ScrollArea component
      WHEN render component with orientation vertical
      SHOULD render an scrollArea vertical orientation`, () => {
    const rendered = render(
      <div>
        <ScrollArea orientation="vertical" css={{ width: "calc($13 + $7)" }}>
          <div>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
    expect(rendered.container.querySelector('[data-orientation="vertical"]'));
  });
});
