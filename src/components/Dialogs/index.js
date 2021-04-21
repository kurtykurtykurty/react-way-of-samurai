import { NavLink } from "react-router-dom";
import style from "./index.module.css";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

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
    return <Dialog name={obj.name} id={obj.id} />;
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
