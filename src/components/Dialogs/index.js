import style from "./index.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogs = props.dialogs;
  const messages = props.messages;

  let dialogsElements = dialogs.map((obj) => {
    return <DialogItem name={obj.name} id={obj.id} />;
  });

  let messageElements = messages.map((obj) => {
    return <Message message={obj.message} />;
  });

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
