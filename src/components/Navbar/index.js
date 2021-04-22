import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <NavLink to="/profile" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink to="/form" activeClassName={style.active}>
          Contact Form
        </NavLink>
      </div>
      <div>
        <NavLink to="/myform" activeClassName={style.active}>
          Form
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
