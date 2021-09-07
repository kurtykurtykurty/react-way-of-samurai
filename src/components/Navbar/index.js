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
                <NavLink to="/users" activeClassName={style.active}>
                    Users
                </NavLink>
            </div>
            <div>News</div>
            <div>
                <NavLink to="/redirect" activeClassName={style.active}>
                    Redirect
                </NavLink>
            </div>
            <div>
                <NavLink to="/hook" activeClassName={style.active}>
                    Hook
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
