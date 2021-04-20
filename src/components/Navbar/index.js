import React from "react";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>Profile</div>
      <div>Dialogs</div>
    </nav>
  );
};

export default Navbar;
