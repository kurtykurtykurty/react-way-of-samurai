/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import style from './Users.module.css';

const User = (props) => {
    return (
        <div className={style.container}>
            <div>
                <img
                    src={
                        props.photo != null
                            ? props.photo
                            : 'https://блоха.com/sites/default/files/styles/avatar/public/userpic.png'
                    }
                    className={style.userpic}
                    alt=""
                />
                <div>
                    {props.isFollowed ? (
                        <button
                            type="button"
                            onClick={() => {
                                props.unfollow(props.id);
                            }}
                        >
                            unfollow
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={() => {
                                props.follow(props.id);
                            }}
                        >
                            follow
                        </button>
                    )}
                </div>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.status}</p>
            </div>
        </div>
    );
};

const Users = (props) => {
    const state = props.usersPage;

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }

    const UserList = state.users.map((u) => {
        return (
            <User
                id={u.id}
                key={u.id}
                name={u.name}
                status={u.status}
                photo={u.photos.small}
                isFollowed={u.followed}
                follow={(id) => {
                    props.follow(id);
                }}
                unfollow={(id) => {
                    props.unfollow(id);
                }}
            />
        );
    });
    return (
        <div>
            <div>
                {pages.map((i) => {
                    return (
                        <button
                            type="button"
                            key={i}
                            className={
                                props.currentPage === i && style.activePage
                            }
                            onClick={(e) => {
                                props.onPageChanged(i);
                            }}
                        >
                            [{i}]
                        </button>
                    );
                })}
            </div>
            Users component
            {UserList}
        </div>
    );
};

export default Users;
