import { deepPurpleAndAmberTheme, Theme } from "@artly-ui/core";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { ArtlyProviderProps } from "./types";

const ArtlyProvider: FC<ArtlyProviderProps> = ({
  theme = deepPurpleAndAmberTheme,
  children,
}) => {
  const [previousValue, setPreviousValue] = useState<Theme>();

  useLayoutEffect(() => {
    if (previousValue) {
      document.documentElement.classList.remove(previousValue);
      document.body.classList.remove(previousValue);
    }

    document.documentElement.classList.add(theme);
    document.body.classList.add(theme);

    setPreviousValue(theme);
  }, [theme]);

  useEffect(() => {
    setPreviousValue(theme);
  }, []);

  return <>{children}</>;
};

export { ArtlyProvider };
