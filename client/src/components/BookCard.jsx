function BookCard({ title, author, bookId, key }) {
    return (
        <article key={key} className="book-card">
            <h3>{title}</h3>
            <p>{author}</p>
            <img src={`https://covers.openlibrary.org/b/id/${bookId}-L.jpg`} alt={`Image for the book ${title}`} className="book-img" />
        </article>
    )
}

export default BookCard