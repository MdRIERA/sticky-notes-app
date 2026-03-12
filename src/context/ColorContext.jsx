import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [defaultColor, setDefaultColor] = useState("#ffd54f");

  return (
    <ColorContext.Provider value={{ defaultColor, setDefaultColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);