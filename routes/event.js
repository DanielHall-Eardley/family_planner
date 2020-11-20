const router = require('express').Router()
const { 
  getCalender,
  createEvent
 } = require('../controllers/event')

router.get('/', getCalender)

router.post('/create', createEvent)

module.exports = router