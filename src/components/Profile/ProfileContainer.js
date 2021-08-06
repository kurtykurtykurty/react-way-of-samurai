/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import Profile from './Profile';
import {
    setUserProfile,
    getUserProfileThunkCreator,
} from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { userId } = this.props;
        if (this.props.match.params.userId) {
            this.props.getUserProfile(this.props.match.params.userId);
        } else {
            this.props.getUserProfile(userId);
        }
    }

    componentDidUpdate() {
        console.log('PROFILE UPDATE');
        if (!this.props.profile && !this.props.match.params.userId) {
            console.log('didUpdate getUserProfile userId');
            this.props.getUserProfile(this.props.userId);
        }
    }

    componentWillUnmount() {
        console.log('profile unmount');
    }

    render() {
        if (!this.props.match.params.userId && !this.props.isAuth) {
            return <Redirect to="/profile" />;
        }
        console.log('render profile');
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}
const mapStateToProps = (state) => {
    console.log('MAPSTATETOPROPS profile container');
    return {
        profile: state.profilePage.profile,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
    };
};

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    getUserProfile: getUserProfileThunkCreator,
})(WithURLDataContainerComponent);
