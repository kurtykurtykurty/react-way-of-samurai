import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogsReducer';

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
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
