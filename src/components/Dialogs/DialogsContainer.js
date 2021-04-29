import StoreContext from '../../redux/StoreContext';
import Dialogs from './Dialogs';
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from '../../redux/dialogsReducer';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState().dialogsPage;

        const onMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyActionCreator(body));
        };

        const onSendMessageClick = () => {
          store.dispatch(sendNewMessageActionCreator());
        };

        return (
          <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={onSendMessageClick}
            state={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
