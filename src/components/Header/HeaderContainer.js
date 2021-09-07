/* eslint-disable object-curly-newline */
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';

import { setAuthUserDataThunkCreator } from '../../redux/authReducer';

function HeaderContainer({ login, isAuth, img, authMe }) {
    useEffect(() => {
        console.log('HEADER RENDER');
        if (!isAuth) {
            authMe();
        }
        return () => {
            console.log('HEADER UNMOUNT');
        };
    });
    return <Header isAuth={isAuth} img={img} login={login} />;
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        img: state.auth.img.small,
    };
};

export default connect(mapStateToProps, {
    authMe: setAuthUserDataThunkCreator,
})(HeaderContainer);
