import React from "react";
import { NavLink } from "react-router-dom";
// import "./Header.css";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      |<NavLink to="sobre">Sobre</NavLink>|<NavLink to="Login">Login</NavLink>
    </nav>
  );
};

export default Header;
