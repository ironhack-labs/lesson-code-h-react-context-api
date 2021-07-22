import React, { createContext, useState } from "react";    // <== UPDATE

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState('light');      // <== ADD

  const toggleTheme = () => {                     // <== ADD
    if (theme === 'light') { 
      setTheme('dark');
    } else {
      setTheme('light');
    };
  }  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>   {/*  <== UPDATE   */}
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper };