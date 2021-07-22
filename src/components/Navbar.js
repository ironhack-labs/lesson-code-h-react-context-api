import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <div>
        <NavLink to="/" exact activeClassName="selected">Home</NavLink>
        <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
