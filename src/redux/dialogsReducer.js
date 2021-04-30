/* eslint-disable no-param-reassign */
/* eslint-disable indent */
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Joka',
    },
    {
      id: 2,
      name: 'Boka',
    },
  ],
  messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'wooohooo' },
  ],
  newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      const newState = { ...state };
      newState.newMessageBody = action.body;
      return newState;
    }

    case SEND_MESSAGE: {
      const body = state.newMessageBody;
      state.newMessageBody = '';
      const newMessage = {
        id: 3,
        message: body,
      };
      const newState = { ...state, ...state.messages };
      newState.messages.push(newMessage);
      return newState;
    }

    default:
      return state;
  }
};

export default dialogsReducer;

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body,
  };
};
export const sendNewMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
