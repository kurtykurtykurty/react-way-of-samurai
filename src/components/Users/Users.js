// /* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */

import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

const User = (props) => {
    const myUser = 18645;
    return (
        <div className={style.container}>
            <div>
                <NavLink to={`/profile/${props.id}`}>
                    <img
                        src={
                            props.photo != null
                                ? props.photo
                                : 'https://блоха.com/sites/default/files/styles/avatar/public/userpic.png'
                        }
                        className={style.userpic}
                        alt=""
                    />
                </NavLink>
                <div>
                    {props.isFollowed ? (
                        <button
                            type="button"
                            disabled={props.followingInProgress.some((id) => {
                                return id === props.id;
                            })}
                            onClick={() => {
                                props.toggleFollowingProgress(true, props.id);
                                console.log(props.id);
                                usersAPI.unfollow(props.id).then((response) => {
                                    if (response.resultCode === 0) {
                                        props.unfollow(props.id);
                                    }
                                    props.toggleFollowingProgress(
                                        false,
                                        props.id,
                                    );
                                });
                            }}
                        >
                            unfollow
                        </button>
                    ) : (
                        <button
                            type="button"
                            disabled={props.followingInProgress.some((id) => {
                                return id === props.id;
                            })}
                            onClick={() => {
                                props.toggleFollowingProgress(true, props.id);
                                console.log(props.id);
                                console.log('click');
                                usersAPI.follow(props.id).then((response) => {
                                    if (response.resultCode === 0) {
                                        props.follow(props.id);
                                    }
                                    props.toggleFollowingProgress(
                                        false,
                                        props.id,
                                    );
                                });
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
                toggleFollowingProgress={(isFetching, userId) => {
                    props.toggleFollowingProgress(isFetching, userId);
                }}
                followingInProgress={props.followingInProgress}
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
                                props.currentPage === i
                                    ? style.activePage
                                    : undefined
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
                <div>{props.isFetching && <Preloader />}</div>
            </div>
            {UserList}
        </div>
    );
};

export default Users;
