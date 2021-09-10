import { useState } from 'react';

const ProfileStatus = ({ status }) => {
    const [isEdit, editMode] = useState(false);

    function toggleEdit() {
        console.log('toggleEdit');
        editMode(!isEdit);
    }

    return (
        <>
            {isEdit ? (
                <div>
                    <input
                        autoFocus={true}
                        onBlur={toggleEdit}
                        value={status}
                    />
                </div>
            ) : (
                <div>
                    <span onClick={toggleEdit}>{status}</span>
                </div>
            )}
        </>
    );
};

export default ProfileStatus;
