import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        { id: 1, message: 'hello, pidor', likesCount: '0' },
        { id: 2, message: 'my secod post', likesCount: '0' },
    ],
    newPostText: '',
    profile: null,
};

let countId = 2;

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText !== '') {
                const newPost = {
                    id: (countId += 1),
                    message: state.newPostText,
                    likesCount: 8,
                };

                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: '',
                };
            }
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.newText };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default: {
            return state;
        }
    }
};

export default profileReducer;

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    };
};

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    };
};

export const getUserProfileThunkCreator = (id) => {
    return (dispatch) => {
        usersAPI.getUserProfile(id).then((response) => {
            dispatch(setUserProfile(response));
        });
    };
};
