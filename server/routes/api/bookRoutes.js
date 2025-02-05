const router = require('express').Router()
const { bookCategory, searchBook } = require("../../controllers/bookControllers")

router.route('/').get(bookCategory)
router.route('/search').post(searchBook)

module.exports = router