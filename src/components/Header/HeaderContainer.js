/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserDataThunkCreator } from '../../redux/authReducer';
import {
    setUserProfile,
    getUserProfileThunkCreator,
} from '../../redux/profileReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
        console.log('header mount');
    }

    componentDidUpdate() {
        console.log('header update');
    }

    componentWillUnmount() {
        console.log('header unmount');
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
        img: state.auth.img.small,
        profile: state.profilePage.profile,
    };
};

export default connect(mapStateToProps, {
    setUserProfile,
    authMe: setAuthUserDataThunkCreator,
    getUserProfile: getUserProfileThunkCreator,
})(HeaderContainer);
