import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ isFetching, profile }) => {
    return (
        <div>
            {isFetching ? <Preloader /> : <ProfileInfo profile={profile} />}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
