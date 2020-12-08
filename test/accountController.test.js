const { host } = require('../global')

jest.mock('../db', () => {
  return jest.fn(() => ({data: 'database results'}))
})

jest.mock('bcrypt', () => {
  return jest.fn(() => 'hashedPassword')
})

import {
  getLogin,
  getCreateFamily,
  getJoinFamily,
  login,
  joinFamily,
  createFamily,
  createFamilyMember
} from '../controllers/account'

const req = {}
const res = {}
let next

beforeEach(() => {
  res.render = jest.fn()
  res.status = jest.fn()
  res.json = jest.fn()
  next = jest.fn()
})

test('Login server side render', () => {
  getLogin(req, res, next)

  expect(res.render).toBeCalledWith('./account/login.ejs', {host})
})

test('Signup/Join family server side render', () => {
  const data = {
    host,
    action: 'Join'
  }
  
  getJoinFamily(req, res, next)

  expect(res.render).toBeCalledWith('./account/signup.ejs', data)
})

test('Signup/Create family server side render', () => {
  const data = {
    host,
    action: 'Create'
  }

  getCreateFamily(req, res, next)

  expect(res.render).toBeCalledWith('./account/signup.ejs', data)
})

