import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav>
                <span>
                    <p>BookQuest</p>
                </span>
                <span>
                    <Link to={`/category?subject=${encodeURIComponent('science_fiction')}`}>Science Fiction</Link>
                    <Link to={`/category?subject=${encodeURIComponent('mystery')}`}>Mystery</Link>
                    <Link to={`/category?subject=${encodeURIComponent('horror')}`}>Horror</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar