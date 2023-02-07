import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch, SwitchContainer, SwitchLabel } from "./Switch";

describe("Core component / Switch", () => {
  it(`GIVEN a Switch component
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(<Switch />);
    const switchComponent = rendered.getByRole("switch");
    expect(switchComponent).toBeVisible();
  });

  it(`GIVEN a Switch component
      WITH label
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-airplane">Switch Label</SwitchLabel>
        <Switch id="switch-airplane" />
      </SwitchContainer>
    );

    const switchComponent = rendered.getByRole("switch");
    const switchLabel = rendered.getByText("Switch Label");

    expect(switchComponent).toBeVisible();
    expect(switchLabel).toBeVisible();
  });

  it(`GIVEN a Switch component
      WITH label
      WHEN user click in label
      THEN should active switch`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-airplane">Switch Label</SwitchLabel>
        <Switch id="switch-airplane" />
      </SwitchContainer>
    );

    const switchLabel = rendered.getByText("Switch Label");
    userEvent.click(switchLabel);

    const switchComponent = rendered.getByRole("switch", {
      checked: true,
    });

    expect(switchComponent).toBeVisible();
    expect(switchLabel).toBeVisible();
  });

  it(`GIVEN a Switch component
      WITH disabled state
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(
      <SwitchContainer>
        <SwitchLabel htmlFor="switch-airplane">Switch Label</SwitchLabel>
        <Switch id="switch-airplane" disabled />
      </SwitchContainer>
    );

    expect(rendered.container).toMatchSnapshot();
  });
});
