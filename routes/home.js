const router = require('express').Router()
const { getHome } = require('../controllers/home')

router.get('/:familyId', getHome)

module.exports = router