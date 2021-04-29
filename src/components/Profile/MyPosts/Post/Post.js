/* eslint-disable react/jsx-one-expression-per-line */
import style from './index.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/0_Alexander-Helios_Capitolini_%281%29.JPG/170px-0_Alexander-Helios_Capitolini_%281%29.JPG"
        alt=""
      />
      {props.message}
      <div>
        <span>♥{props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
