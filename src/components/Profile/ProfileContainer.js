/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let { userId } = this.props.match.params;
        if (!userId) {
            userId = 2;
        }
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`,
            )
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />;
    }
}
const mapStateToProps = (state) => {
    return { profile: state.profilePage.profile };
};

const WithURLDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
    WithURLDataContainerComponent,
);
