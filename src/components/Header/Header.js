/* eslint-disable operator-linebreak */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.loginBlock}>
                <div>
                    {/* <img scr={props.img} alt="" /> */}
                    <img
                        className={style.userPic}
                        src={
                            props.isAuth && props.profile?.photos?.small
                                ? props.profile.photos.small
                                : 'https://lowcars.net/wp-content/uploads/2017/02/userpic.png'
                        }
                        alt=""
                    />
                </div>
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
