/* eslint-disable no-param-reassign */
/* eslint-disable indent */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [],
};

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            const { id } = action;
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === id) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        }
        case UNFOLLOW: {
            const { id } = action;
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === id) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] };
        }
        default:
            return state;
    }
};

export default usersReduser;

export const followAC = (id) => {
    return {
        type: FOLLOW,
        id,
    };
};

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        id,
    };
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};
