import style from './index.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  const state = props.dialogsPage;
  const dialogsElements = state.dialogs.map((obj) => {
    return <DialogItem name={obj.name} id={obj.id} />;
  });
  const messageElements = state.messages.map((obj) => {
    return <Message message={obj.message} />;
  });

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messageElements}</div>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onMessageChange}
            value={state.newMessageBody}
          />
        </div>
        <div>
          <button type="button" onClick={onSendMessageClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
