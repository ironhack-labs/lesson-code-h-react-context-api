import { NavLink } from "react-router-dom";

import { useContext } from 'react';                         // <== ADD
import { ThemeContext } from './../context/theme.context';   // <== ADD

function Navbar() {
  const theme = useContext(ThemeContext);         // <== ADD

  return (
    <nav className={"Navbar " + theme}>           {/*  <== UPDATE   */}
      <div>
        <NavLink to="/" exact activeClassName="selected">Home</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
