import { createContext, FC, ReactNode, useContext, useState } from "react";

type AppContextValues = {
  slToken: string;
  setSlToken: React.Dispatch<React.SetStateAction<string>>;
  currentSender: string;
  setCurrentSender: React.Dispatch<React.SetStateAction<string>>;
};
const AppContext = createContext<AppContextValues | null>(null);

export const useAppContext = (): AppContextValues => {
  const ctxValue = useContext(AppContext);
  if (ctxValue === null) {
    throw new Error("Expected context value to be set");
  }
  return ctxValue;
};

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [slToken, setSlToken] = useState<string>("");
  const [currentSender, setCurrentSender] = useState<string>("");
  return (
    <AppContext.Provider
      value={{ slToken, setSlToken, currentSender, setCurrentSender }}
    >
      {children}
    </AppContext.Provider>
  );
};
