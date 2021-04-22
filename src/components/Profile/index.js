import { addPost } from "../../redux/state";
import style from "./index.module.css";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={addPost} />
    </div>
  );
};

export default Profile;
