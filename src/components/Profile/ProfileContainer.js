import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import Profile from './Profile';

import { getUserProfileThunkCreator } from '../../redux/profileReducer';

function ProfileContainer({
    profile,
    isFetching,
    userId,
    authStatus,
    match,
    getUserProfile,
}) {
    useEffect(() => {
        console.log('PROFILE mount, userId=', userId);
        if (match.params.userId) {
            getUserProfile(match.params.userId);
        } else if (authStatus) {
            getUserProfile(userId);
        }
        return () => {
            console.log('PROFILE unmount');
        };
    }, [match.params.userId, userId]);

    if (!match.params.userId && authStatus === false) {
        return <Redirect to="/login" />;
    }
    console.log('render profile');
    return <Profile isFetching={isFetching} profile={profile} />;
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        userId: state.auth.userId,
        profileId: state.profilePage.profileId,
        authStatus: state.auth.authStatus,
    };
};
const WithURLDataContainerComponent = withRouter(ProfileContainer); //! note

export default connect(mapStateToProps, {
    getUserProfile: getUserProfileThunkCreator,
})(WithURLDataContainerComponent);
