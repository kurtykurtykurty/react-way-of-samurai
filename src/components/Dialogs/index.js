import style from "./index.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>Joka</div>
        <div className={style.dialog}>Boka</div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>hi</div>
        <div className={style.message}>yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
