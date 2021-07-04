/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import * as axios from 'axios';
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

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const state = this.props.usersPage;

        const pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize,
        );

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
                        this.props.follow(id);
                    }}
                    unfollow={(id) => {
                        this.props.unfollow(id);
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
                                    this.props.currentPage === i &&
                                    style.activePage
                                }
                                onClick={(e) => {
                                    this.onPageChanged(i);
                                }}
                            >
                                [{i}]
                            </button>
                        );
                    })}
                </div>
                Users component
                <button type="button" onClick={this.getUsers}>
                    Get users
                </button>
                {UserList}
            </div>
        );
    }
}

export default Users;
