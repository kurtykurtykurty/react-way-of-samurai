import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };

  const onSendMessageClick = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };
  debugger;
  return (
    <Dialogs
      updateNewMessageBody={onMessageChange}
      sendMessage={onSendMessageClick}
      state={state}
    />
  );
};

export default DialogsContainer;
