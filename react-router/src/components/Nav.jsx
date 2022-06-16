import { Link } from "react-router-dom"

function Nav() {
    return (
        <div>
            <Link to = {"/"}>Home</Link>
            <Link to = {"/board"}>Board</Link>
            <Link to = {"/profile"}>Profile</Link>
        </div>
    );
}

export default Nav;
