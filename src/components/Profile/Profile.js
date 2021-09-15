import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ isFetching, profile, status, updateStatus }) => {
    return (
        <div>
            {isFetching ? (
                <Preloader />
            ) : (
                <ProfileInfo
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                />
            )}
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
