import React, { createContext } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {

  return (
    <ThemeContext.Provider value={"light"}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper };