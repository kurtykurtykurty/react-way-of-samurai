import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import Profile from './Profile';

import { getUserProfileThunkCreator } from '../../redux/profileReducer';

function ProfileContainer({
    profile,
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
    return <Profile profile={profile} />;
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

export default compose(
    connect(mapStateToProps, { getUserProfile: getUserProfileThunkCreator }),
    withRouter,
)(ProfileContainer);
