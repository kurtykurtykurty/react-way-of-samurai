import style from './index.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ({ dialogsPage, updateNewMessageBody, sendMessage }) => {
    const dialogsElements = dialogsPage.dialogs.map((obj) => {
        return <DialogItem name={obj.name} key={obj.id} id={obj.id} />;
    });
    const messageElements = dialogsPage.messages.map((obj) => {
        return <Message message={obj.message} key={obj.id} />;
    });

    const onSendMessageClick = () => {
        sendMessage();
    };

    const onMessageChange = (e) => {
        const body = e.target.value; //!
        updateNewMessageBody(body);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>{dialogsElements}</div>
            <div className={style.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea
                        placeholder="Enter your message"
                        onChange={onMessageChange}
                        value={dialogsPage.newMessageBody}
                    />
                </div>
                <div>
                    <button type="button" onClick={onSendMessageClick}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
