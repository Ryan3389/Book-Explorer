import { useState } from "react"
import BookCard from "../components/BookCard"

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState({
        search: ""
    })

    const [searchResults, setSearchResults] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setSearchTerm({
            ...searchTerm,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/books/search', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(searchTerm)
            })

            if (!response.ok) {
                throw new Error("Error searching books")
            }

            const data = await response.json()
            const topResults = data.results.docs.slice(0, 9)

            const updateSearchState = topResults.map(book => ({
                title: book.title,
                author: book.author_name[0],
                bookId: book.cover_i
            }))

            setSearchResults(updateSearchState)
            console.log(topResults)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="book-section">
            <span className="form-container">
                <form onSubmit={handleFormSubmit}>
                    {/* <label htmlFor="search">Search Books</label> */}
                    <input
                        type="text"
                        name="search"
                        id="search"
                        onChange={handleChange}
                        placeholder="Search..."
                    />
                    <input type="submit" value="Search" />
                </form>

            </span>
            <div className="book-category">
                {searchResults.map((book, index) => (
                    <BookCard
                        title={book.title}
                        author={book.author}
                        bookId={book.bookId}
                    />
                ))}
            </div>
        </section>
    )
}

export default SearchPage