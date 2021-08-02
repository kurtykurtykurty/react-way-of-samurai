import { usersAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
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

export const setAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        usersAPI.authMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(
                    setAuthUserData(
                        response.data.id,
                        response.data.email,
                        response.data.login,
                    ),
                );
            }
        });
    };
};
