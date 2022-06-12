import React, { useContext } from 'react';
import { UserInfoContext } from '../App';

function Profile() {
    const userInfo = useContext(UserInfoContext);
    return (
        <div>
            <p>
                id : <span>{userInfo.id}</span>
            </p>
            <p>
                이름 : <span>{userInfo.name}</span>
            </p>
        </div>
    );
}

export default React.memo(Profile);
