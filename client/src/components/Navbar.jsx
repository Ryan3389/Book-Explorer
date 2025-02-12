import { Link } from "react-router-dom"
function Navbar() {
    return (
        <header>
            <nav>
                <span>
                    <Link to={'/'}>
                        <p>BookQuest</p>
                    </Link>
                </span>
                <span>
                    <Link to={`/category?subject=${encodeURIComponent('history')}`}>History</Link>
                    <Link to={`/category?subject=${encodeURIComponent('mystery')}`}>Mystery</Link>
                    <Link to={`/category?subject=${encodeURIComponent('horror')}`}>Horror</Link>
                </span>
            </nav>
        </header>
    )
}

export default Navbar