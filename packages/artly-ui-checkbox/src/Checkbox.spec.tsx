import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox, CheckboxContainer, CheckboxLabel } from "./Checkbox";

describe("Core component / Checkbox", () => {
  it(`GIVEN a Checkbox component
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(<Checkbox />);
    const checkboxComponent = rendered.getByRole("checkbox");
    expect(checkboxComponent).toBeVisible();
  });

  it(`GIVEN a Checkbox component
      WITH label
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(
      <CheckboxContainer>
        <CheckboxLabel htmlFor="checkbox-airplane">
          Checkbox Label
        </CheckboxLabel>
        <Checkbox id="checkbox-airplane" />
      </CheckboxContainer>
    );

    const checkboxComponent = rendered.getByRole("checkbox");
    const checkboxLabel = rendered.getByText("Checkbox Label");

    expect(checkboxComponent).toBeVisible();
    expect(checkboxLabel).toBeVisible();
  });

  it(`GIVEN a Checkbox component
      WITH label
      WHEN user click in label
      THEN should active checkbox`, () => {
    const rendered = render(
      <CheckboxContainer>
        <CheckboxLabel htmlFor="checkbox-airplane">
          Checkbox Label
        </CheckboxLabel>
        <Checkbox id="checkbox-airplane" />
      </CheckboxContainer>
    );

    const checkboxLabel = rendered.getByText("Checkbox Label");
    userEvent.click(checkboxLabel);

    const checkboxComponent = rendered.getByRole("checkbox", {
      checked: true,
    });

    expect(checkboxComponent).toBeVisible();
    expect(checkboxLabel).toBeVisible();
  });

  it(`GIVEN a Checkbox component
      WITH disabled state
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(
      <CheckboxContainer>
        <CheckboxLabel htmlFor="checkbox-airplane">
          Checkbox Label
        </CheckboxLabel>
        <Checkbox id="checkbox-airplane" disabled />
      </CheckboxContainer>
    );

    expect(rendered.container).toMatchSnapshot();
  });
});
