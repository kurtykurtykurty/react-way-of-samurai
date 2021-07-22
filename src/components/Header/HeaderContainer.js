/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer';
import { setUserProfile } from '../../redux/profileReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    componentDidUpdate() {
        console.log('componentDidUpdate header container');
        if (this.props.profile === null) {
            axios
                .get(
                    `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`,
                )
                .then((response) => {
                    this.props.setUserProfile(response.data);
                });
        }
    }

    render() {
        return <Header {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile,
    };
};

export default connect(mapStateToProps, { setAuthUserData, setUserProfile })(
    HeaderContainer,
);
