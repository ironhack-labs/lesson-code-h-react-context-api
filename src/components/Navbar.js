import { NavLink } from "react-router-dom";

import { useContext } from 'react';
import { ThemeContext } from './../context/theme.context';

function Navbar() {
  const theme = useContext(ThemeContext);

  return (
    <nav className={"Navbar " + theme}>
      <div>
        <NavLink to="/" exact activeClassName="selected">Home</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
