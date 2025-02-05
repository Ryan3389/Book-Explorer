function bookCategory(req, res) {
    try {
        res.status(200).json("Route is working")
    } catch (error) {
        console.error(error)
    }
}

module.exports = { bookCategory }