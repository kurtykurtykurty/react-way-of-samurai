/* eslint-disable indent */
/* eslint-disable no-param-reassign */
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: 'hello, pidor', likesCount: '0' },
    { id: 2, message: 'my secod post', likesCount: '0' },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 8,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
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
