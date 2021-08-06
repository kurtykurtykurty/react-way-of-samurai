import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {
    sendNewMessageActionCreator,
    updateNewMessageBodyActionCreator,
} from '../../redux/dialogsReducer';

const mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage, isAuth: state.auth.isAuth };
};

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
