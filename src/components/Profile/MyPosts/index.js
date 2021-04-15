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
        <Post num="1" />
        <Post num="2" />
        <Post num="3" />
      </div>
    </div>
  );
};

export default MyPosts;
