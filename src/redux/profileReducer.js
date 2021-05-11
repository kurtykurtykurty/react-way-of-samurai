const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        { id: 1, message: 'hello, pidor', likesCount: '0' },
        { id: 2, message: 'my secod post', likesCount: '0' },
    ],
    newPostText: '',
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
