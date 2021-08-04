/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
        if (!this.props.profile && !this.props.match.params.userId) {
            console.log('didUpdate getUserProfile userId');
            this.props.getUserProfile(this.props.userId);
        }
    }

    componentWillUnmount() {
        console.log('profile unmount');
    }

    render() {
        console.log('render profile');
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}
const mapStateToProps = (state) => {
    return { profile: state.profilePage.profile, userId: state.auth.userId };
};

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUserProfile,
    getUserProfile: getUserProfileThunkCreator,
})(WithURLDataContainerComponent);
