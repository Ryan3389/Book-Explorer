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


            console.log(topResults)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="book-section">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="search">Search Books</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                />
                <input type="submit" value="Search" />
            </form>

        </section>
    )
}

export default SearchPage