/* eslint-disable react/jsx-props-no-spreading */ // HOC component
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const redirectContainer = (Component) => {
    const WrappedComponent = (props) => {
        if (props.isAuth) {
            return <Component {...props} />;
        }
        return <Redirect to="/login" />;
    };

    const mapStateToProps = (state) => {
        return { isAuth: state.auth.isAuth };
    };

    return connect(mapStateToProps)(WrappedComponent);
};

export default redirectContainer;
