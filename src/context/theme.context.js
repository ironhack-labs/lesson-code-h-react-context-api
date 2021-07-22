import React, { createContext } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {            // <== CREATE A WRAPPER COMPONENT

  return (
    <ThemeContext.Provider value={"light"}>    {/*  <== SET UP THE PROVIDER INSIDE */}
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper };  // <== UPDATE