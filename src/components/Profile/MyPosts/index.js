import style from "./MyPost.module.css";
import Post from "./Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "hello, pidor", likesCount: "0" },
    { id: 2, message: "my secod post", likesCount: "0" },
  ];

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
        <Post message={postsData[0].message} likes={postsData[0].likesCount} />
        <Post message={postsData[1].message} likes={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
