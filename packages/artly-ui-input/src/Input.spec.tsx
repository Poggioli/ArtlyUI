import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Core component / Input", () => {
  it(`GIVEN a Input compoenent
      WHEN it's not required
      THEN should not render * in label`, () => {
    const rendered = render(<Input label="Enter your email" />);
    const label = rendered.getByLabelText("Enter your email");
    expect(label).toBeVisible();
  });

  it(`GIVEN a Input compoenent
      WHEN it's required
      THEN should render * in label`, () => {
    const rendered = render(<Input required label="Enter your email" />);
    const label = rendered.getByLabelText("Enter your email *");
    expect(label).toBeVisible();
  });

  it(`GIVEN a Input compoenent
      WHEN has id
      THEN should render normaly`, () => {
    const rendered = render(<Input label="Enter your email" id="12345" />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a Input compoenent
      WHEN has autofocus
      THEN should render normaly`, () => {
    const rendered = render(
      <Input autoFocus label="Enter your email" id="12345" />
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a Input compoenent
      WHEN has value
      THEN should render normaly`, () => {
    const rendered = render(
      <Input label="Enter your email" id="12345" value="email@email.com" />
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a Input compoenent
      WHEN has no value
      AND has focus
      THEN should render placeholder`, () => {
    const rendered = render(<Input label="Enter your email" id="12345" />);
    expect(rendered.container).toMatchSnapshot();
  });

  it(`GIVEN a Input compoenent
      WHEN has focus
      AND has value
      THEN should NOT render placeholder`, () => {});

  it(`GIVEN a onFocus props
      WHEN input has focus
      THEN should call onFocus props`, () => {
    const onFocus = jest.fn();
    const rendered = render(
      <Input label="Enter your email" onFocus={onFocus} />
    );
    const input = rendered.getByLabelText("Enter your email");
    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it(`GIVEN a onBlur props
      WHEN input blur
      THEN should call onBlur props`, () => {
    const onBlur = jest.fn();
    const rendered = render(<Input label="Enter your email" onBlur={onBlur} />);
    const input = rendered.getByLabelText("Enter your email");
    fireEvent.focus(input);
    userEvent.type(input, "email@email.com");
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it(`GIVEN a onChange props
      WHEN input change
      THEN should call onChange props`, () => {
    const onChange = jest.fn();
    const rendered = render(
      <Input label="Enter your email" onChange={onChange} />
    );
    const input = rendered.getByLabelText("Enter your email");
    userEvent.type(input, "email@email.com");
    expect(onChange).toHaveBeenCalledTimes("email@email.com".length);
  });
});
