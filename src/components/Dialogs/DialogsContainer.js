import { connect } from 'react-redux';
import { compose } from 'redux';
import Dialogs from './Dialogs';
import {
    sendNewMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from '../../redux/dialogsReducer';

import redirectContainer from '../../hoc/redirectContainer';

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        sendMessage: () => {
            dispatch(sendNewMessageActionCreator());
        },
    };
};

const mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    redirectContainer,
)(Dialogs);

/*
const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthRedirectComponent);

    Next code is equal to above

const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)((props) => {
    if (props.isAuth) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Dialogs {...props} />;
    }
    return <Login />;
});

*/
