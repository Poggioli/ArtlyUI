import { createContext, FC, PropsWithChildren, useState } from "react";
import { AccordionContextType, AccordionItemContextType } from "./types";

const DEFAULT_VALUE: AccordionContextType = {
  state: {
    disabled: false,
  },
  setState: () => {},
};

const AccordionContext = createContext<AccordionContextType>(DEFAULT_VALUE);

const AccordionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AccordionContext.Provider value={{ state, setState }}>
      {children}
    </AccordionContext.Provider>
  );
};

const DEFAULT_VALUE_ITEM: AccordionItemContextType = {
  state: {
    disabled: false,
  },
  setState: () => {},
};

const AccordionItemContext =
  createContext<AccordionItemContextType>(DEFAULT_VALUE_ITEM);

const AccordionItemContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE_ITEM.state);

  return (
    <AccordionItemContext.Provider value={{ state, setState }}>
      {children}
    </AccordionItemContext.Provider>
  );
};

export {
  AccordionContextProvider,
  AccordionContext,
  AccordionItemContextProvider,
  AccordionItemContext,
};
