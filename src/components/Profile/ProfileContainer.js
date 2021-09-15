import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import Profile from './Profile';

import { getUserProfileThunkCreator } from '../../redux/profileReducer';
import { getStatus, updateStatus } from './../../redux/profileReducer';

const ProfileContainer = ({
    profile,
    userId,
    authStatus,
    match,
    getUserProfile,
    status,
    getStatusProfile,
    updateStatusProfile,
}) => {
    useEffect(() => {
        if (match.params.userId) {
            getUserProfile(match.params.userId);
            getStatusProfile(match.params.userId);
        } else if (authStatus) {
            getUserProfile(userId);
            getStatusProfile(userId);
        }
        return () => {};
    }, [match.params.userId, userId, status]);

    if (!match.params.userId && authStatus === false) {
        return <Redirect to="/login" />;
    }
    return (
        <Profile
            profile={profile}
            status={status}
            updateStatus={updateStatusProfile}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        userId: state.auth.userId,
        profileId: state.profilePage.profileId,
        authStatus: state.auth.authStatus,
        status: state.profilePage.status,
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserProfile: getUserProfileThunkCreator,
        getStatusProfile: getStatus,
        updateStatusProfile: updateStatus,
    }),
    withRouter,
)(ProfileContainer);
