/* eslint-disable no-param-reassign */
/* eslint-disable indent */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
            return { ...state, users: [...action.users] };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalCount };
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

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    };
};

export const setTotalUsersCountAC = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount,
    };
};
