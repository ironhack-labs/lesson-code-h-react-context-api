// src/context/theme.context.js

import React, { createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {

  return (
    <ThemeContext.Provider value={"light"}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider };