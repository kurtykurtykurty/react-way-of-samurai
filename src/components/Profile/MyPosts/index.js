import style from "./MyPost.module.css";
import Post from "./Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "hello, pidor", likesCount: "0" },
    { id: 2, message: "my secod post", likesCount: "0" },
  ];

  let myPosts = postsData.map((obj) => {
    return <Post message={obj.message} likes={obj.likesCount} />;
  });

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
      <div className={style.posts}>{myPosts}</div>
    </div>
  );
};

export default MyPosts;
