import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            {props.isFetching ? (
                <Preloader />
            ) : (
                <ProfileInfo profile={props.profile} />
            )}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
