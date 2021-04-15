import style from "./index.module.css";
import MyPosts from "./MyPosts";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_cuts_the_Gordian_Knot.jpg" />{" "}
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
