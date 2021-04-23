import React from "react";
import style from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const posts = props.posts;

  let myPosts = posts.map((obj) => {
    return <Post message={obj.message} likes={obj.likesCount} />;
  });

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  const addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={props.text}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{myPosts}</div>
    </div>
  );
};

export default MyPosts;
