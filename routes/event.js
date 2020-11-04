const router = require('express').Router()
const { getCalender } = require('../controllers/event')

router.get('/:familyId', getCalender)

module.exports = router