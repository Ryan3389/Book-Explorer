const router = require('express').Router()
const { bookCategory } = require("../../controllers/bookControllers")

router.route('/').get(bookCategory)

module.exports = router