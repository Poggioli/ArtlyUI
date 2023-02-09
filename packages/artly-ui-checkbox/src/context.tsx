import { createContext, FC, PropsWithChildren, useState } from "react";
import { CheckboxContextType } from "./types";

const DEFAULT_VALUE: CheckboxContextType = {
  state: {
    disabled: false,
  },
  setState: () => {},
};

const CheckboxContext = createContext<CheckboxContextType>(DEFAULT_VALUE);

const CheckboxContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <CheckboxContext.Provider value={{ state, setState }}>
      {children}
    </CheckboxContext.Provider>
  );
};

export { CheckboxContextProvider, CheckboxContext };
