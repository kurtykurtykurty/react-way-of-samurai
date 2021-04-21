import { NavLink } from "react-router-dom";
import style from "./index.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>
        <div className={style.dialog}>
          <NavLink to="/dialogs/1" className={style.dialog}>
            Joka
          </NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2" className={style.dialog}>
            Boka
          </NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>hi</div>
        <div className={style.message}>yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
