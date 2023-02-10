import { CheckboxContextType, CheckboxGroupContextType } from "./types";

export const DEFAULT_VALUE_GROUP: CheckboxGroupContextType = {
  state: {
    disabled: false,
    required: false,
    value: [],
    defaultValue: [],
    onChangeValue: () => {},
    color: "unstyled",
  },
  setState: () => {},
};

export const DEFAULT_VALUE: CheckboxContextType = {
  state: {
    disabled: false,
  },
  setState: () => {},
};
