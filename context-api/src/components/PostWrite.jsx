import PostSelect from '../components/PostSelect';
import { useState } from 'react';

function PostWrite({ onWrite }) {
    const [postInfo, setPostInfo] = useState({
        title: '',
        content: ''
    });

    //글 저장
    const submit = function () {
        setPostInfo({
            title: '',
            content: ''
        });
        return onWrite(postInfo);
    };

    return (
        <div className="editor">
            <h2>글쓰기</h2>
            <PostSelect />
            <div>
                <p>
                    글제목 :{' '}
                    <input
                        type="text"
                        value={postInfo.title}
                        onChange={(e) => {
                            setPostInfo({ ...postInfo, title: e.target.value });
                        }}
                    ></input>
                </p>
                <p>
                    글 내용 :{' '}
                    <textarea
                        value={postInfo.content}
                        onChange={(e) => {
                            setPostInfo({ ...postInfo, content: e.target.value });
                        }}
                    ></textarea>
                </p>
            </div>
            <button onClick={submit} postInfo={postInfo}>
                작성하기
            </button>
        </div>
    );
}

export default PostWrite;
