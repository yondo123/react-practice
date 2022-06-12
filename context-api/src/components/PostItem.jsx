function Profile({ post }) {
    return (
        <li className="post">
            <p>
                <strong>제목 :</strong> {post.title}
            </p>
            <p></p>
            <p>
                <strong>내용 :</strong> {post.content}
            </p>
        </li>
    );
}

export default Profile;
