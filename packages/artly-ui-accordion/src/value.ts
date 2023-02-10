import { AccordionContextType, AccordionItemContextType } from "./types";

export const DEFAULT_VALUE: AccordionContextType = {
  state: {
    disabled: false,
  },
  setState: () => {},
};

export const DEFAULT_VALUE_ITEM: AccordionItemContextType = {
  state: {
    disabled: false,
  },
  setState: () => {},
};
