/* eslint-disable consistent-return */
/* eslint-disable operator-linebreak */
import style from './index.module.css';
import ProfileStatus from './ProfileStatus';

const Profile = ({ profile, status, updateStatus }) => {
    if (profile) {
        return (
            <div className={style.profile}>
                <div>
                    <img
                        className={style.poster}
                        // src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_cuts_the_Gordian_Knot.jpg"
                        src={
                            profile.photos.large
                                ? profile.photos.large
                                : 'https://lowcars.net/wp-content/uploads/2017/02/userpic.png'
                        }
                        alt=""
                    />
                    <ProfileStatus
                        status={status}
                        updateStatus={updateStatus}
                    />
                    <div>
                        <h2>{profile.aboutMe}</h2>
                        <ul>
                            <li>
                                Contacts:
                                <ul>
                                    <li>{profile.contacts.website}</li>
                                    <li>{profile.contacts.facebook}</li>
                                    <li>{profile.contacts.vk}</li>
                                    <li>{profile.contacts.twitter}</li>
                                    <li>{profile.contacts.instagram}</li>
                                    <li>{profile.contacts.youtube}</li>
                                    <li>{profile.contacts.github}</li>
                                    <li>{profile.contacts.mainlink}</li>
                                </ul>
                            </li>
                            <li>
                                Looking for a job
                                <ul>
                                    <li>
                                        {profile.lookingForAJob ? '✓' : 'X'}
                                    </li>
                                </ul>
                            </li>
                            <li>
                                lookingForAJobDescription
                                <ul>
                                    <li>{profile.lookingForAJobDescription}</li>
                                </ul>
                            </li>
                            <li>
                                Full name
                                <ul>
                                    <li>{profile.fullName}</li>
                                </ul>
                            </li>
                            <li>
                                User ID
                                <ul>
                                    <li>{profile.userId}</li>
                                </ul>
                            </li>

                            <img src={profile.photos.small} alt="" />
                        </ul>
                    </div>
                </div>
                <div className={style.descriptionBlock}>ava + description</div>
            </div>
        );
    }
    return <h2>Not profile!</h2>;
};
export default Profile;
