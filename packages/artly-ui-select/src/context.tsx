import {
  createContext,
  FC,
  PropsWithChildren, useState
} from "react";
import { SelectContextState, SelectContextType } from "./types";
import { DEFAULT_VALUE } from "./values";

const SelectContext = createContext<SelectContextType>(DEFAULT_VALUE);

const SelectContextProvider: FC<PropsWithChildren<SelectContextState>> = ({
  children,
}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <SelectContext.Provider value={{ state, setState }}>
      {children}
    </SelectContext.Provider>
  );
};

export { SelectContext, SelectContextProvider };
