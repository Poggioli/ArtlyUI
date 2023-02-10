import { createContext, FC, PropsWithChildren, useState } from "react";
import { AccordionContextType, AccordionItemContextType } from "./types";
import { DEFAULT_VALUE, DEFAULT_VALUE_ITEM } from "./value";

const AccordionContext = createContext<AccordionContextType>(DEFAULT_VALUE);

const AccordionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AccordionContext.Provider value={{ state, setState }}>
      {children}
    </AccordionContext.Provider>
  );
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
