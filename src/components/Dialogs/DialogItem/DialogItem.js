import { NavLink } from 'react-router-dom';
import style from '../index.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
