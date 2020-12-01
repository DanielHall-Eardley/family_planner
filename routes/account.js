const router = require('express').Router()
const { 
  getLogin,
  getCreateFamily,
  getJoinFamily,
  login,
  joinFamily,
  createFamily
 } = require('../controllers/account')

router.get('/login', getLogin)

router.get('/signup/join', getJoinFamily)

router.get('/signup/create', getCreateFamily)

router.post('/login', login)

router.post('/signup/join', joinFamily)

router.post('/signup/create', createFamily)

module.exports = router