import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxGroup,
  CheckboxLabel,
} from "./Checkbox";

describe("Core component / Checkbox", () => {
  it(`GIVEN a Checkbox component
      WHEN render component
      THEN should occurs render normaly`, () => {
    const rendered = render(<Checkbox value="item-1" />);
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
        <Checkbox value="item-1" id="checkbox-airplane" />
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
        <Checkbox value="item-1" id="checkbox-airplane" />
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
        <Checkbox value="item-1" id="checkbox-airplane" disabled />
      </CheckboxContainer>
    );

    expect(rendered.container).toMatchSnapshot();
  });

  describe("DISABLED", () => {
    describe("Checkbox component", () => {
      const CheckboxDisabledMount = ({
        isDisabled,
      }: {
        isDisabled: boolean;
      }) => {
        const [disabled, setDisabled] = useState(isDisabled);

        return (
          <>
            <button
              onClick={() => {
                setDisabled((previousValue) => !previousValue);
              }}
            >
              Toggle Disabled
            </button>
            <CheckboxContainer>
              <CheckboxLabel htmlFor="checkbox-airplane">
                Checkbox Label
              </CheckboxLabel>
              <Checkbox
                value="item-1"
                id="checkbox-airplane"
                disabled={disabled}
              />
            </CheckboxContainer>
          </>
        );
      };

      it(`GIVEN a Checkbox component
          WHEN it's disabled
          THEN should render a disabled checkbox`, () => {
        const rendered = render(<CheckboxDisabledMount isDisabled={true} />);
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).toBeDisabled();
      });

      it(`GIVEN a Checkbox component
          WHEN it's NOT disabled
          THEN should render an enabled checkbox`, () => {
        const rendered = render(<CheckboxDisabledMount isDisabled={false} />);
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).toBeEnabled();
      });

      it(`GIVEN a Checkbox component disabled
          WHEN user click to enable
          THEN should render a enabled checkbox`, () => {
        const rendered = render(<CheckboxDisabledMount isDisabled={true} />);
        const toggleButton = rendered.getByText("Toggle Disabled");
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).toBeDisabled();
        userEvent.click(toggleButton);
        expect(checkbox).toBeEnabled();
      });

      it(`GIVEN a Checkbox component enabled
          WHEN user click to disable
          THEN should render an disabled checkbox`, () => {
        const rendered = render(<CheckboxDisabledMount isDisabled={false} />);
        const toggleButton = rendered.getByText("Toggle Disabled");
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).toBeEnabled();
        userEvent.click(toggleButton);
        expect(checkbox).toBeDisabled();
      });
    });

    describe("CheckboxGroup component", () => {
      const CheckboxGroupDisabledMount = ({
        isDisabled,
        isDisabledGroup,
      }: {
        isDisabled: boolean;
        isDisabledGroup: boolean;
      }) => {
        const [disabled, setDisabled] = useState(isDisabled);
        const [disabledGroup, setDisabledGroup] = useState(isDisabledGroup);

        return (
          <>
            <button
              onClick={() => {
                setDisabled((previousValue) => !previousValue);
              }}
            >
              Toggle Disabled Item 1
            </button>
            <button
              onClick={() => {
                setDisabledGroup((previousValue) => !previousValue);
              }}
            >
              Toggle Disabled Group
            </button>
            <CheckboxGroup disabled={disabledGroup}>
              <CheckboxContainer>
                <CheckboxLabel htmlFor="item-1">Checkbox Label 1</CheckboxLabel>
                <Checkbox value="item-1" id="item-1" disabled={disabled} />
              </CheckboxContainer>
              <CheckboxContainer>
                <CheckboxLabel htmlFor="item-2">Checkbox Label 2</CheckboxLabel>
                <Checkbox value="item-2" id="item-2" />
              </CheckboxContainer>
            </CheckboxGroup>
          </>
        );
      };

      it(`GIVEN a CheckboxGroup component
          WHEN it's disabled
          THEN should render all checkboxs as disabled`, () => {
        const rendered = render(
          <CheckboxGroupDisabledMount
            isDisabled={true}
            isDisabledGroup={true}
          />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeDisabled();
        expect(checkboxs[1]).toBeDisabled();
      });

      it(`GIVEN a CheckboxGroup component
          WHEN it's NOT disabled
          THEN should render all checkbox as enabled`, () => {
        const rendered = render(
          <CheckboxGroupDisabledMount
            isDisabled={false}
            isDisabledGroup={false}
          />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeEnabled();
        expect(checkboxs[1]).toBeEnabled();
      });

      it(`GIVEN a CheckboxGroup component disabled
          WHEN user click to enable
          THEN should render all checkboxs as enabled`, () => {
        const rendered = render(
          <CheckboxGroupDisabledMount
            isDisabled={false}
            isDisabledGroup={true}
          />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeDisabled();
        expect(checkboxs[1]).toBeDisabled();
        const toggleDisabledGroupButton = rendered.getByText(
          "Toggle Disabled Group"
        );
        userEvent.click(toggleDisabledGroupButton);
        expect(checkboxs[0]).toBeEnabled();
        expect(checkboxs[1]).toBeEnabled();
      });

      it(`GIVEN a CheckboxGroup component enabled
          WHEN user click to disable
          THEN should render all checkboxs as disabled`, () => {
        const rendered = render(
          <CheckboxGroupDisabledMount
            isDisabled={false}
            isDisabledGroup={false}
          />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeEnabled();
        expect(checkboxs[1]).toBeEnabled();
        const toggleDisabledGroupButton = rendered.getByText(
          "Toggle Disabled Group"
        );
        userEvent.click(toggleDisabledGroupButton);
        expect(checkboxs[0]).toBeDisabled();
        expect(checkboxs[1]).toBeDisabled();
      });

      it(`GIVEN a CheckboxGroup component disabled
          AND a checkbox disabled
          WHEN user click to enabled group
          THEN should maintain that checkbox disabled`, () => {
        const rendered = render(
          <CheckboxGroupDisabledMount
            isDisabled={true}
            isDisabledGroup={true}
          />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeDisabled();
        expect(checkboxs[1]).toBeDisabled();
        const toggleDisabledGroupButton = rendered.getByText(
          "Toggle Disabled Group"
        );
        userEvent.click(toggleDisabledGroupButton);
        expect(checkboxs[0]).toBeDisabled();
        expect(checkboxs[1]).toBeEnabled();
      });
    });
  });

  describe("CHECKED", () => {
    describe("Checkbox component", () => {
      const CheckboxCheckMount = ({ isChecked }: { isChecked: boolean }) => {
        const [checked, setChecked] = useState(isChecked);

        return (
          <CheckboxContainer>
            <CheckboxLabel htmlFor="checkbox-airplane">
              Checkbox Label
            </CheckboxLabel>
            <Checkbox
              value="item-1"
              id="checkbox-airplane"
              checked={checked}
              onCheckedChange={(checkedChange) => {
                setChecked(!!checkedChange);
              }}
            />
          </CheckboxContainer>
        );
      };

      it(`GIVEN a Checkbox component
          WHEN it's checked
          THEN should render a checked checkbox`, () => {
        const rendered = render(<CheckboxCheckMount isChecked={true} />);
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).toBeChecked();
      });

      it(`GIVEN a Checkbox component
          WHEN it's NOT checked
          THEN should render an unchecked checkbox`, () => {
        const rendered = render(<CheckboxCheckMount isChecked={false} />);
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).not.toBeChecked();
      });

      it(`GIVEN a Checkbox component checked
          WHEN user click to uncheck
          THEN should render a unchecked checkbox`, () => {
        const rendered = render(<CheckboxCheckMount isChecked={true} />);
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).toBeChecked();
        userEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
      });

      it(`GIVEN a Checkbox component unchecked
          WHEN user click to check
          THEN should render an checked checkbox`, () => {
        const rendered = render(<CheckboxCheckMount isChecked={false} />);
        const checkbox = rendered.getByLabelText("Checkbox Label");
        expect(checkbox).not.toBeChecked();
        userEvent.click(checkbox);
        expect(checkbox).toBeChecked();
      });
    });

    describe("CheckboxGroup component", () => {
      const CheckboxGroupCheckedMount = ({
        checkedsValue,
        defaultValue = [],
      }: {
        checkedsValue: string[];
        defaultValue?: string[];
      }) => {
        const [value, setValue] = useState(checkedsValue);

        return (
          <CheckboxGroup
            defaultValue={defaultValue}
            value={value}
            onChangeValue={setValue}
          >
            <CheckboxContainer>
              <CheckboxLabel htmlFor="item-1">Checkbox Label 1</CheckboxLabel>
              <Checkbox value="item-1" id="item-1" />
            </CheckboxContainer>
            <CheckboxContainer>
              <CheckboxLabel htmlFor="item-2">Checkbox Label 2</CheckboxLabel>
              <Checkbox value="item-2" id="item-2" />
            </CheckboxContainer>
          </CheckboxGroup>
        );
      };

      it(`GIVEN a CheckboxGroup component
          WHEN only one value is checked
          THEN should render one checkbox checked and another not`, () => {
        const rendered = render(
          <CheckboxGroupCheckedMount checkedsValue={["item-1"]} />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeChecked();
        expect(checkboxs[1]).not.toBeChecked();
      });

      it(`GIVEN a CheckboxGroup component
          WHEN all value is checked
          THEN should render all checkbox checked`, () => {
        const rendered = render(
          <CheckboxGroupCheckedMount checkedsValue={["item-1", "item-2"]} />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        checkboxs.forEach((checkbox) => {
          expect(checkbox).toBeChecked();
        });
      });

      it(`GIVEN a CheckboxGroup component
          WHEN all value is checked
          THEN should render all checkbox checked`, () => {
        const rendered = render(
          <CheckboxGroupCheckedMount checkedsValue={["item-1", "item-2"]} />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        checkboxs.forEach((checkbox) => {
          expect(checkbox).toBeChecked();
        });
        const firstCheckbox = rendered.getByLabelText("Checkbox Label 1");
        userEvent.click(firstCheckbox);
        expect(checkboxs[0]).not.toBeChecked();
        expect(checkboxs[1]).toBeChecked();
      });

      it(`GIVEN a CheckboxGroup component
          WHEN defaultValue has at least one value
          THEN should use defaultValue at first time`, () => {
        const rendered = render(
          <CheckboxGroupCheckedMount
            checkedsValue={["item-1", "item-2"]}
            defaultValue={["item-1"]}
          />
        );
        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeChecked();
        expect(checkboxs[1]).not.toBeChecked();
      });

      it(`GIVEN a CheckboxGroup component
          WHEN the onChangeValue props is undefined
          THEN should works normally`, () => {
        const rendered = render(
          <CheckboxGroup value={["item-1"]}>
            <CheckboxContainer>
              <CheckboxLabel htmlFor="item-1">Checkbox Label 1</CheckboxLabel>
              <Checkbox value="item-1" id="item-1" />
            </CheckboxContainer>
            <CheckboxContainer>
              <CheckboxLabel htmlFor="item-2">Checkbox Label 2</CheckboxLabel>
              <Checkbox value="item-2" id="item-2" />
            </CheckboxContainer>
          </CheckboxGroup>
        );

        const checkboxs = rendered.getAllByRole("checkbox");
        expect(checkboxs[0]).toBeChecked();
        expect(checkboxs[1]).not.toBeChecked();

        const firstCheckbox = rendered.getByLabelText("Checkbox Label 2");
        userEvent.click(firstCheckbox);

        expect(checkboxs[0]).toBeChecked();
        expect(checkboxs[1]).toBeChecked();
      });
    });
  });
});
