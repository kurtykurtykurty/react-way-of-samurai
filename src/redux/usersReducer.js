/* eslint-disable no-param-reassign */

import { usersAPI } from '../api/api';

/* eslint-disable indent */
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {
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
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => {
                          return id !== action.userId;
                      }),
            };
        }

        default:
            return state;
    }
};

export default usersReducer;

export const followSuccess = (id) => {
    return {
        type: FOLLOW,
        id,
    };
};

export const unfollowSuccess = (id) => {
    return {
        type: UNFOLLOW,
        id,
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    };
};

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount,
    };
};

export const setIsFetching = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        isFetching,
    };
};

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    };
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(setIsFetching(false));
        });
    };
};

export const followThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id)); //   TODO includes ?
        usersAPI.follow(id).then((response) => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
};

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollow(id).then((response) => {
            if (response.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(toggleFollowingProgress(false, id));
        });
    };
};
