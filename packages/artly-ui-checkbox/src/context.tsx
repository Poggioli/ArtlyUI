import {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState
} from "react";
import {
  CheckboxContextType,
  CheckboxGroupContextState,
  CheckboxGroupContextType
} from "./types";
import { DEFAULT_VALUE, DEFAULT_VALUE_GROUP } from "./values";



const CheckboxContext = createContext<CheckboxContextType>(DEFAULT_VALUE);

const CheckboxContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CheckboxContext.Provider value={{ state, setState }}>
      {children}
    </CheckboxContext.Provider>
  );
};

const CheckboxGroupContext =
  createContext<CheckboxGroupContextType>(DEFAULT_VALUE_GROUP);

const CheckboxGroupContextProvider: FC<
  PropsWithChildren<Partial<CheckboxGroupContextState>>
> = ({
  disabled = false,
  defaultValue = [],
  value = [],
  color,
  onChangeValue,
  children,
}) => {
  const handleOnChangeValue = (values: string[]) => {
    if (onChangeValue) {
      onChangeValue(values);
    }

    setState((previousState) => ({
      ...previousState,
      value: values,
    }));
  };

  const [state, setState] = useState({
    ...DEFAULT_VALUE_GROUP.state,
    disabled,
    defaultValue: defaultValue,
    value: defaultValue.length ? defaultValue : value,
    color: color ?? DEFAULT_VALUE_GROUP.state.color,
    onChangeValue: handleOnChangeValue,
  });

  useEffect(() => {
    setState((previousState) => ({
      ...previousState,
      disabled,
    }));
  }, [disabled]);

  useEffect(() => {
    setState((previousState) => ({
      ...previousState,
      color,
    }));
  }, [color]);

  return (
    <CheckboxGroupContext.Provider value={{ state, setState }}>
      {children}
    </CheckboxGroupContext.Provider>
  );
};

export {
  CheckboxContextProvider,
  CheckboxContext,
  CheckboxGroupContext,
  CheckboxGroupContextProvider,
};
