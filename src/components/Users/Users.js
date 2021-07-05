/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';

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

    if (props.currentPage + 4 <= pagesCount) {
        for (
            let i = props.currentPage - 1;
            i <= props.currentPage + 4;
            i += 1
        ) {
            if (i > 0) {
                pages.push(i);
            }
        }
    } else {
        for (let i = props.currentPage; i <= pagesCount; i += 1) {
            pages.push(i);
        }
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
                {props.isFetching && <Preloader />}
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
                            {i === props.currentPage - 1
                                ? '<'
                                : i === props.currentPage + 4
                                ? '>'
                                : i}
                        </button>
                    );
                })}
            </div>
            {UserList}
        </div>
    );
};

export default Users;
