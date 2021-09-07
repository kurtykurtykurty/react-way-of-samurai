import { usersAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_IMG = 'SET_IMG';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    img: { small: null },
    isFetching: false,
    isAuth: false,
    authStatus: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        case SET_IMG: {
            return {
                ...state,
                img: { small: action.img },
            };
        }
        case SET_AUTH_STATUS: {
            return {
                ...state,
                authStatus: action.status,
            };
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login },
    };
};

export const setImg = (img) => {
    return {
        type: SET_IMG,
        img,
    };
};

const setAuthStatus = (status) => {
    return {
        type: SET_AUTH_STATUS,
        status,
    };
};
export const setAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        usersAPI.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthStatus(true));
                dispatch(
                    setAuthUserData(
                        response.data.id,
                        response.data.email,
                        response.data.login,
                    ),
                );
                usersAPI.getUserImg(response.data.id).then((img) => {
                    dispatch(setImg(img));
                });
            } else dispatch(setAuthStatus(false));
        });
    };
};

export const setUserImgThunkCreator = () => {};
