import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';

const User = ({
    id,
    photo,
    name,
    status,
    isFollowed,
    unfollow,
    followingInProgress,
    follow,
}) => {
    //! const myUser = 18645;
    return (
        <div className={style.container}>
            <div>
                <NavLink to={`/profile/${id}`}>
                    <img
                        src={
                            photo != null
                                ? photo
                                : 'https://блоха.com/sites/default/files/styles/avatar/public/userpic.png'
                        }
                        className={style.userpic}
                        alt=""
                    />
                </NavLink>
                <div>
                    {isFollowed ? (
                        <button
                            type="button"
                            disabled={followingInProgress.some((progressId) => {
                                return progressId === id;
                            })}
                            onClick={() => {
                                unfollow(id);
                            }}
                        >
                            unfollow
                        </button>
                    ) : (
                        <button
                            type="button"
                            disabled={followingInProgress.some((progressId) => {
                                return progressId === id;
                            })}
                            onClick={() => {
                                follow(id);
                            }}
                        >
                            follow
                        </button>
                    )}
                </div>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{status}</p>
            </div>
        </div>
    );
};

const Users = ({
    usersPage,
    totalUsersCount,
    pageSize,
    currentPage,
    follow,
    unfollow,
    toggleFollowingProgress,
    followingInProgress,
    onPageChanged,
    isFetching,
}) => {
    const state = usersPage;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];

    if (currentPage + 20 <= pagesCount) {
        for (let i = currentPage - 1; i <= currentPage + 20; i += 1) {
            if (i > 0) {
                pages.push(i);
            }
        }
    } else {
        for (let i = currentPage; i <= pagesCount; i += 1) {
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
                    follow(id);
                }}
                unfollow={(id) => {
                    unfollow(id);
                }}
                toggleFollowingProgress={(isFetching, userId) => {
                    toggleFollowingProgress(isFetching, userId);
                }}
                followingInProgress={followingInProgress}
            />
        );
    });
    return (
        <div>
            <div>
                {pages.map((i) => {
                    return (
                        <NavLink to={`/users/${i}`}>
                            <button
                                // type="button"
                                key={i}
                                className={
                                    currentPage === i
                                        ? style.activePage
                                        : undefined
                                }
                                onClick={() => {
                                    onPageChanged(i);
                                }}
                            >
                                {i === currentPage - 1
                                    ? '<'
                                    : i === currentPage + 20
                                    ? '>'
                                    : i}
                            </button>
                        </NavLink>
                    );
                })}
                <div>{isFetching ? <Preloader /> : UserList}</div>
            </div>
        </div>
    );
};

export default Users;
