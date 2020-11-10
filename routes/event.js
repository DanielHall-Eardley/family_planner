const router = require('express').Router()
const { getCalender } = require('../controllers/event')

router.get('/:id', getCalender)

module.exports = router