import style from './index.module.css';

const Profile = () => {
  return (
    <div className={style.profile}>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_cuts_the_Gordian_Knot.jpg"
          alt=""
        />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default Profile;
