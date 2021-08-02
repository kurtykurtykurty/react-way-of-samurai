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
        // let { userId } = this.props;
        // if (!userId) {
        //     userId = 2;
        // }
        // this.props.getUserProfile(userId); //! !!!
    }

    componentWillUnmount() {
        console.log('profile unmount');
    }

    render() {
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
