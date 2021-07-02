/* eslint-disable react/button-has-type */
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
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    getUsers = () => {
        const state = this.props.usersPage;

        if (state.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    this.props.setUsers(response.data.items);
                });
        }
    };

    render() {
        const state = this.props.usersPage;

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
                Users component
                <button onClick={this.getUsers}>Get users</button>
                {UserList}
            </div>
        );
    }
}

export default Users;
