import { useState } from 'react';

const ProfileStatus = ({ status, updateStatus }) => {
    const [isEdit, editMode] = useState(false);
    const [statusText, editText] = useState(status);

    function toggleEdit(e) {
        if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
            editMode(!isEdit);
        }
    }

    function disableEdit() {
        editMode(false);
    }

    function editStatus(e) {
        editText(e.target.value);
    }

    function changeStatus() {
        updateStatus(statusText);
        disableEdit();
    }

    return (
        <>
            {isEdit ? (
                <div>
                    <div onBlur={toggleEdit}>
                        <input
                            autoFocus={true}
                            onChange={editStatus}
                            value={statusText}
                        />
                        <button onClick={changeStatus}>Ok</button>
                    </div>
                </div>
            ) : (
                <div>
                    <span onClick={toggleEdit}>
                        {status || 'Изменить статус'}
                    </span>
                </div>
            )}
        </>
    );
};

export default ProfileStatus;
