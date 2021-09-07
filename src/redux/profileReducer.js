import { usersAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_PROFILE_ID = 'SET_PROFILE_ID';

const initialState = {
    posts: [
        { id: 1, message: 'hello, pidor', likesCount: '0' },
        { id: 2, message: 'my secod post', likesCount: '0' },
    ],
    newPostText: '',
    profile: null,
    isFetching: true,
    profileId: null,
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
        case SET_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        case SET_PROFILE_ID: {
            return { ...state, profileId: action.id };
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

const setIsFetching = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        isFetching,
    };
};

const setProfileId = (id) => {
    return {
        type: SET_PROFILE_ID,
        id,
    };
};
export const getUserProfileThunkCreator = (id) => {
    console.log('GETUSERPROFILETHUNKCREATOR');
    return (dispatch) => {
        dispatch(setProfileId(id));
        dispatch(setIsFetching(true));
        usersAPI
            .getUserProfile(id)
            .then((response) => {
                dispatch(setUserProfile(response));
                dispatch(setIsFetching(false));
            })
            .catch((err) => {
                console.dir(err.response.status);
            });
    };
};
