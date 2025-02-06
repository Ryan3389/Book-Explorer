import { Link } from "react-router-dom"

function HomePage() {
    return (
        <section className="hero-section">
            <article className="hero-cta">
                <h1>Discover Your Next Favourite Book</h1>
                <p>Search, explore, and dive into a world of books with ease</p>
                <Link to="/search" className="search-btn">Search Books</Link>
            </article>
        </section>
    )
}

export default HomePage