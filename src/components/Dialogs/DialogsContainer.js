import { connect } from 'react-redux';
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

let AuthRedirectComponent = redirectContainer(Dialogs);

const mapStateToPropsForRedirect = (state) => {
    return { isAuth: state.auth.isAuth };
};

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(
//     AuthRedirectComponent,
// );

const mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage };
};

const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthRedirectComponent);

/*
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

export default DialogsContainer;
