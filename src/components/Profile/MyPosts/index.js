import style from "./MyPost.module.css";
import Post from "./Post";

const MyPosts = (props) => {
  const posts = props.posts;

  let myPosts = posts.map((obj) => {
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
