import { useSearchParams } from 'react-router-dom';

function Board() {
    const [searchParams, setSearchParam] = useSearchParams();
    return (
        <div>
            <h2>Board Page</h2>
            <p>
                작성자 : <span>{searchParams.get('userId')}</span>
            </p>
            <p>
                게시글 번호 : <span>{searchParams.get('docId')}</span>
            </p>
            <button
                type="button"
                onClick={() => {
                    setSearchParam({ userId: 'odnoy' });
                }}
            >
                Change Query
            </button>
        </div>
    );
}

export default Board;
