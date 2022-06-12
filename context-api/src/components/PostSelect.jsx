import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserInfoContext } from '../App';

function PostSelect() {
    const userInfo = useContext(UserInfoContext);
    const [categories, setCategoires] = useState([
        {
            optionId: '1',
            value: 'life',
            name: '일상',
            auth: 'guest'
        },
        {
            optionId: '2',
            value: 'question',
            name: 'Q&A',
            auth: 'guest'
        },
        {
            optionId: '3',
            value: 'notice',
            name: '공지사항',
            auth: 'admin'
        }
    ]);
    useEffect(function () {
        setCategoires(
            categories.filter((item) => {
                return item.auth === userInfo.auth;
            })
        );
    }, []);
    return (
        <>
            <select name="" id="">
                {categories.map((item) => {
                    return (
                        <option value={item.value} key={item.optionId}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </>
    );
}

export default PostSelect;
