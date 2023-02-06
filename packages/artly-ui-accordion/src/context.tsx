import { createContext, FC, PropsWithChildren, useState } from "react";
import { AccordionContext, AccordionItemContext } from "./types";

const DEFAULT_VALUE: AccordionContext = {
  state: {
    disabled: false,
  },
  setState: () => {},
};

const AccordionContext = createContext<AccordionContext>(DEFAULT_VALUE);

const AccordionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AccordionContext.Provider value={{ state, setState }}>
      {children}
    </AccordionContext.Provider>
  );
};

const DEFAULT_VALUE_ITEM: AccordionItemContext = {
  state: {
    disabled: false,
  },
  setState: () => {},
};

const AccordionItemContext =
  createContext<AccordionItemContext>(DEFAULT_VALUE_ITEM);

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
