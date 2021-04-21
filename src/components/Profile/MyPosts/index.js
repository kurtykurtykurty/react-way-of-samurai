import style from "./MyPost.module.css";
import Post from "./Post";

const MyPosts = () => {
  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message="Hello pidor" likes="0" />
        <Post message="My second post" likes="0" />
      </div>
    </div>
  );
};

export default MyPosts;
