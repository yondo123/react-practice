import PostItem from '../components/PostItem';
function Post({ postList }) {
    return (
        <div>
            <h2>게시글</h2>
            <ul>
                {postList.map((item) => {
                    return <PostItem post={item} key={item.postId} />;
                })}
            </ul>
        </div>
    );
}

export default Post;
