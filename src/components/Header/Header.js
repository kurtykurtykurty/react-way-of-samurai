import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                {props.isAuth ? (
                    props.login
                ) : (
                    <NavLink to="/login">Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
