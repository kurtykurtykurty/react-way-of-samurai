/* eslint-disable operator-linebreak */
import style from './index.module.css';
import Preloader from '../../common/Preloader/Preloader';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }
    return (
        <div className={style.profile}>
            <div>
                <img
                    className={style.poster}
                    // src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_cuts_the_Gordian_Knot.jpg"
                    src={
                        props.profile.photos.large
                            ? props.profile.photos.large
                            : 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Alexander_cuts_the_Gordian_Knot.jpg'
                    }
                    alt=""
                />
                <div>
                    <h2>{props.profile.aboutMe}</h2>
                    <ul>
                        <li>
                            Contacts:
                            <ul>
                                <li>{props.profile.contacts.website}</li>
                                <li>{props.profile.contacts.facebook}</li>
                                <li>{props.profile.contacts.vk}</li>
                                <li>{props.profile.contacts.twitter}</li>
                                <li>{props.profile.contacts.instagram}</li>
                                <li>{props.profile.contacts.youtube}</li>
                                <li>{props.profile.contacts.github}</li>
                                <li>{props.profile.contacts.mainlink}</li>
                            </ul>
                        </li>
                        <li>
                            Looking for a job
                            <ul>
                                <li>
                                    {props.profile.lookingForAJob ? '✓' : 'X'}
                                </li>
                            </ul>
                        </li>
                        <li>
                            lookingForAJobDescription
                            <ul>
                                <li>
                                    {props.profile.lookingForAJobDescription}
                                </li>
                            </ul>
                        </li>
                        <li>
                            Full name
                            <ul>
                                <li>{props.profile.fullName}</li>
                            </ul>
                        </li>
                        <li>
                            User ID
                            <ul>
                                <li>{props.profile.userId}</li>
                            </ul>
                        </li>

                        <img src={props.profile.photos.small} alt="" />
                    </ul>
                </div>
            </div>
            <div className={style.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default Profile;
