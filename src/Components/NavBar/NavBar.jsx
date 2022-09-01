import React from "react";
import { NavLink } from "react-router-dom";
import MiniNavBar from "./MiniNavBar/MiniNavBar";
import "./NavBar.css";
const NavBar = () => {
  return (
    <>
      <MiniNavBar />
      <div className="mainNavBar">
        <NavLink className="navBarName" to="/">
          Besnik.
        </NavLink>

        <NavLink to="/about" className="navBarWords">
          {" "}
          О НАС
        </NavLink>

        <NavLink to="/delivery" className="navBarWords">
          {" "}
          ДОСТАВКА
        </NavLink>

        <NavLink to="/product" className="navBarWords">
          {" "}
          ИНТЕРНЕТ-МАГАЗИН
        </NavLink>
        <NavLink to="/all-products" className="navBarWords">
          {" "}
          СКЛАД
        </NavLink>

        <NavLink to="/contact" className="navBarWords">
          {" "}
          КОНТАКТЫ
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
