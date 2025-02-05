import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav>
                <span>
                    <p>BookQuest</p>
                </span>
                <span>
                    <Link>Science Fiction</Link>
                    <Link>Category</Link>
                    <Link>Category</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar