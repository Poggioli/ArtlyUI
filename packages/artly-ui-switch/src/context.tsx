import { createContext, FC, PropsWithChildren, useState } from "react";
import { SwitchContextType } from "./types";
import { DEFAULT_VALUE } from "./values";

const SwitchContext = createContext<SwitchContextType>(DEFAULT_VALUE);

const SwitchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <SwitchContext.Provider value={{ state, setState }}>
      {children}
    </SwitchContext.Provider>
  );
};

export { SwitchContextProvider, SwitchContext };
