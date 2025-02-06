import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import BookCard from "../components/BookCard"

function BookCategory() {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const subject = params.get('subject')

    const [bookData, setBookData] = useState([])
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(`/api/books?subject=${subject}`)

                if (!response.ok) {
                    throw new Error("Error fetching data")
                }

                const data = await response.json()
                const topResults = data.results.works.slice(0, 9)
                const updateBookState = topResults.map((book) => ({
                    title: book.title,
                    author: book.authors[0].name,
                    coverId: book.cover_id
                }))

                console.log(updateBookState)
                setBookData(updateBookState)

            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [subject])

    return (
        <section className="book-section">
            <h1>{subject}</h1>
            <div className="book-category">
                {bookData.map((book, index) => (
                    <BookCard
                        title={book.title}
                        author={book.author}
                        bookId={book.coverId}
                        key={index}
                    />
                ))}

            </div>

        </section>

    )
}

export default BookCategory