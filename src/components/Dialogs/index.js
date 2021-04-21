import style from "./index.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    {
      id: 1,
      name: "Joka",
    },
    {
      id: 2,
      name: "Boka",
    },
  ];

  let messageData = [
    { id: 1, message: "hi" },
    { id: 2, message: "wooohooo" },
  ];

  let dialogsElements = dialogsData.map((obj) => {
    return <DialogItem name={obj.name} id={obj.id} />;
  });

  let messageElements = messageData.map((obj) => {
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
