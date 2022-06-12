import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import Post from './components/Post';
import PostWrite from './components/PostWrite';
export const UserInfoContext = React.createContext();

function App() {
    const [userInfo] = useState({
        name: 'Jiny',
        id: 'yondo123',
        auth: 'admin'
    });

    const [postList, setPostList] = useState([
        {
            postId: 1,
            title: '글 제목',
            content: '글 내용 입니다!',
            comments: [
                {
                    id: 'user',
                    content: '댓글 입니다.',
                    update: new Date()
                }
            ]
        },
        {
            postId: 2,
            title: '두번째',
            content: '두번째 글 입니다.',
            comments: [
                {
                    id: 'yondo123',
                    content: '댓글 입니다.',
                    update: new Date()
                }
            ]
        }
    ]);

    //글쓰기
    const writePost = (post) => {
        const register = {
            postId: postList.length + 1,
            comments: [],
            title: post.title || '제목',
            content: post.content || '하이'
        };

        setPostList([...postList, register]);
    };

    return (
        <UserInfoContext.Provider value={userInfo}>
            <div className="App">
                <h2>게시판</h2>
                <Profile />
                <Post postList={postList} />
                <PostWrite onWrite={writePost} />
            </div>
        </UserInfoContext.Provider>
    );
}

export default App;
