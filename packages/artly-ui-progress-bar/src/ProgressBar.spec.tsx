import { render, RenderResult } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";
import { ProgressBarProps } from "./types";

describe("Data display component / ProgressBar", () => {
  let rendered: RenderResult;

  const mount = ({ ...props }: ProgressBarProps): void => {
    rendered = render(<ProgressBar {...props} />);
  };

  it(`GIVEN a ProgressBar
      WHEN this ProgressBar has 10 as value
      SHOULD set data-value as 10`, () => {
    mount({ value: 10 });
    const progressBarValue =
      rendered.container.querySelector('[data-value="10"]');
    expect(progressBarValue).toBeVisible();
  });

  it(`GIVEN a ProgressBar
      WHEN this ProgressBar has no value
      SHOULD set data-state as indeterminate`, () => {
    mount({});
    const progressBarValue = rendered.container.querySelector(
      '[data-state="indeterminate"]'
    );
    expect(progressBarValue).toBeVisible();
  });
});
