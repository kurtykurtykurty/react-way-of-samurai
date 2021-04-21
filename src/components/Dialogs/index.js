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
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <Dialog name="Joka" id="1" />
        <Dialog name="Boka" id="2" />
      </div>
      <div className={style.messages}>
        <Message message="hi" />
        <Message message="woooo" />
      </div>
    </div>
  );
};

export default Dialogs;
