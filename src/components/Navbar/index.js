import React from "react";
import style from "./index.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Dialogs</a>
      </div>
    </nav>
  );
};

export default Navbar;
