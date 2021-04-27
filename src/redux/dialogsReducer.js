const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      const body = state.newMessageBody;
      state.newMessageBody = "";
      const newMessage = {
        id: 3,
        message: body,
      };
      state.messages.push(newMessage);
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};
export const sendNewMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
