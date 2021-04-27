import style from "./index.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  const state = props.store.getState().dialogsPage;

  const dialogs = state.dialogs;
  const messages = state.messages;
  const newMessageBody = state.newMessageBody;

  const dialogsElements = dialogs.map((obj) => {
    return <DialogItem name={obj.name} id={obj.id} />;
  });

  const messageElements = messages.map((obj) => {
    return <Message message={obj.message} />;
  });

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.store.dispatch(updateNewMessageBodyActionCreator(text));
  };

  const onSendMessageClick = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };
  debugger;
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messageElements}</div>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onMessageChange}
            value={newMessageBody}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
