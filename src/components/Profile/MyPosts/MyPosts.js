import React from 'react';
import style from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const { posts } = props;

    const myPosts = posts.map((obj) => {
        return (
            <Post message={obj.message} likes={obj.likesCount} key={obj.id} />
        );
    });

    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPostText(text);
    };

    const onAddPost = () => {
        props.addPost();
    };

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button type="button" onClick={onAddPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>{myPosts}</div>
        </div>
    );
};

export default MyPosts;
