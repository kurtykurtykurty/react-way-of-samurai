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

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
        <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={style.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
      </div>
    </div>
  );
};

export default Dialogs;
