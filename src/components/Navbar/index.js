import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

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
        <a>News</a>
      </div>
    </nav>
  );
};

export default Navbar;
