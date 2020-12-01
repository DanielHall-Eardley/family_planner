const db = require('../db')
const { host } = require('../global')

const getLogin = async (req, res, next) => {
  try {
    const data = {
      host
    }

    res.render('./account/login', data)
  } catch (error) {
    next(error)
  }
}

const getJoinFamily = async (req, res, next) => {
  try {
    const data = {
      host,
      action: 'Join'
    }

    res.render('./account/signup.ejs', data)
  } catch (error) {
    next(error)
  }
}

const getCreateFamily = async (req, res, next) => {
  try {
    const data = {
      host,
      action: 'Create'
    }

    res.render('./account/signup.ejs', data)
  } catch (error) {
    next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const familyId = req.params.familyId

    const data = {
      host,
      section: 'events',
      familyId
    }

    res.render('./events/index.ejs', data)
  } catch (error) {
    next(error)
  }
}

const createFamily = async (req, res, next) => {
  try {
    const familyId = req.params.familyId

    const data = {
      host,
      section: 'events',
      familyId
    }

    res.render('./events/index.ejs', data)
  } catch (error) {
    next(error)
  }
}

const joinFamily = async (req, res, next) => {
  try {
    const familyId = req.params.familyId

    const data = {
      host,
      section: 'events',
      familyId
    }

    res.render('./events/index.ejs', data)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getLogin,
  getCreateFamily,
  getJoinFamily,
  login,
  joinFamily,
  createFamily
}