import style from "./index.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hello pidor" likes="0" />
        <Post message="My second post" likes="0" />
      </div>
    </div>
  );
};

export default MyPosts;
