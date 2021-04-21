import style from "../index.module.css";

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

export default Message;
