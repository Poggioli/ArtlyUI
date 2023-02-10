import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio, RadioContainer, RadioItem, RadioLabel } from "./Radio";

describe("Core component / Radio", () => {
  it(`GIVEN a Radio component
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(
      <Radio>
        <RadioItem value="radio-1" />
      </Radio>
    );
    const radioComponent = rendered.getByRole("radio");
    expect(radioComponent).toBeVisible();
  });

  it(`GIVEN a Radio component
      WITH label
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(
      <Radio>
        <RadioContainer>
          <RadioItem id="daily" value="daily" />
          <RadioLabel htmlFor="daily">Daily</RadioLabel>
        </RadioContainer>
      </Radio>
    );

    const radioComponent = rendered.getByRole("radio");
    const radioLabel = rendered.getByText("Daily");

    expect(radioComponent).toBeVisible();
    expect(radioLabel).toBeVisible();
  });

  it(`GIVEN a Radio component
      WITH label
      WHEN user click in label
      THEN should active radio`, () => {
    const rendered = render(
      <Radio>
        <RadioContainer>
          <RadioItem id="daily" value="daily" />
          <RadioLabel htmlFor="daily">Daily</RadioLabel>
        </RadioContainer>
      </Radio>
    );

    const radioLabel = rendered.getByText("Daily");
    userEvent.click(radioLabel);

    const radioComponent = rendered.getByRole("radio", {
      checked: true,
    });

    expect(radioComponent).toBeVisible();
    expect(radioLabel).toBeVisible();
  });
});
