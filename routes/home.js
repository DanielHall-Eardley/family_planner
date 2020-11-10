const router = require('express').Router()
const { getHome } = require('../controllers/home')

router.get('/:id', getHome)

module.exports = router