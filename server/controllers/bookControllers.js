async function bookCategory(req, res) {
    try {
        const { subject } = req.query
        const url = `https://openlibrary.org/subjects/${subject}.json`

        const response = await fetch(url)

        const data = await response.json()

        res.status(200).json({ results: data })
    } catch (error) {
        console.error(error)
    }
}

async function searchBook(req, res) {
    const { search } = req.body
    try {
        const url = `https://openlibrary.org/search.json?title=${search}`

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error
        }

        const data = await response.json()

        res.status(200).json({ results: data })
    } catch (error) {
        console.error(error)
    }
}

module.exports = { bookCategory, searchBook }