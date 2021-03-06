/* eslint-disable operator-linebreak */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

const Header = ({ isAuth, img, login }) => {
    return (
        <header className={style.header}>
            <NavLink to="/">
                <div className={style.appLogo}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                        className={style.logoImg}
                        alt=""
                    />
                </div>
            </NavLink>
            <div className={style.loginBlock}>
                <div>
                    <img
                        className={style.userPic}
                        src={
                            isAuth && img
                                ? img
                                : 'https://lowcars.net/wp-content/uploads/2017/02/userpic.png'
                        }
                        alt=""
                    />
                </div>
                {isAuth ? login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
