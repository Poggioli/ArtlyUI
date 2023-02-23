import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectGroupSeparator,
  SelectItem,
  SelectTrigger,
} from "./Select";

describe("Core component / Select", () => {
  it(`GIVEN a Select component
    WHEN render component
    SHOULD occurs render normaly`, () => {
    const rendered = render(
      <Select>
        <SelectTrigger placeholder="Select a fruit" />
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
    expect(rendered.container).toBeTruthy();
  });

  it(`GIVEN a Select component with value
      WHEN render component
      SHOULD show the selected value
      AND the placeholder`, () => {
    const rendered = render(
      <Select value="banana">
        <SelectTrigger placeholder="Select a fruit" />
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const placeholder = rendered.getByText("Select a fruit");
    const value = rendered.getByText("Banana");

    expect(placeholder).toBeVisible();
    expect(value).toBeVisible();
  });

  it(`GIVEN a Select component with onValueChange
      WHEN value change
      SHOULD call this function`, () => {
    const onValueChange = jest.fn();
    const rendered = render(
      <Select onValueChange={onValueChange}>
        <SelectTrigger placeholder="Select a fruit" />
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const placeholder = rendered.getByRole("combobox");
    userEvent.click(placeholder);

    const blueberryItem = rendered.getByText("Blueberry");
    userEvent.click(blueberryItem);

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith("blueberry");
  });

  it(`GIVEN a Select component without onValueChange
      WHEN value change
      SHOULD change value normaly`, () => {
    const rendered = render(
      <Select>
        <SelectTrigger placeholder="Select a fruit" />
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>Fruits</SelectGroupLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
          <SelectGroupSeparator />
          <SelectGroup>
            <SelectGroupLabel>Meat</SelectGroupLabel>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const placeholder = rendered.getByRole("combobox");
    userEvent.click(placeholder);

    const blueberryItem = rendered.getByText("Blueberry");
    userEvent.click(blueberryItem);

    const value = rendered.getByText("Blueberry");

    expect(value).toBeVisible();
  });
});
