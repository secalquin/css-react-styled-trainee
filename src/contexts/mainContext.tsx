import * as React from "react";

export type MainContextType = {
  darkMode: boolean;
  handleColorMode: () => void;
};

const MainContext = React.createContext({} as MainContextType);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export function MainContextProvider({ children }: Props): React.ReactElement {
  const [darkMode, setDarkMode] = React.useState<boolean>(true);

  const handleColorMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <MainContext.Provider value={{ darkMode, handleColorMode }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainContext;
