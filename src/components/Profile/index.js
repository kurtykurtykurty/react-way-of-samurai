import style from "./index.module.css";
import MyPosts from "./MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
