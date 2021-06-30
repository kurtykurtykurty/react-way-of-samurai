/* eslint-disable react/button-has-type */
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

const Users = (props) => {
    const state = props.usersPage;

    const getUsers = () => {
        if (state.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    props.setUsers(response.data.items);
                });
        }

        // props.setUsers([
        //     {
        //         id: '1',
        //         followed: true,
        //         fullName: 'Хуёмоё',
        //         status: 'Хуятус',
        //         location: { city: 'Блядск', country: 'Ебаландия' },
        //         photoUrl:
        //             'https://блоха.com/sites/default/files/styles/avatar/public/userpic.png',
        //     },
        //     {
        //         id: '2',
        //         followed: false,
        //         fullName: 'Еблан',
        //         status: 'Хуятус',
        //         location: { city: 'Блядск', country: 'Ебаландия' },
        //         photoUrl:
        //             'https://блоха.com/sites/default/files/styles/avatar/public/userpic.png',
        //     },
        //     {
        //         id: '3',
        //         followed: false,
        //         fullName: 'Чмоня',
        //         status: 'Блятус',
        //         location: { city: 'Чмоньск', country: 'Чмостан' },
        //         photoUrl:
        //             'https://блоха.com/sites/default/files/styles/avatar/public/userpic.png',
        //     },
        // ]);
    };

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
            Users component
            <button onClick={getUsers}>Get users</button>
            {UserList}
        </div>
    );
};

export default Users;
