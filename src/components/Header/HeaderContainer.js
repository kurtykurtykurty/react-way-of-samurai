/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer';

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
    };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
