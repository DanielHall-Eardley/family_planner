const db = require('../db')
const { host } = require('../global')
const bcrypt = require('bcrypt')

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
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    if (!hashedPassword) {
      throw new Error ('Unable to create password')
    }

    const queryText = `INSERT INTO family(
      family_name,
      family_password
    ) VALUES (
      $1,
      $2
    ) RETURNING family.family_name`

    const params = [req.body.lastName, hashedPassword]
    const result = await db.query(queryText, params)
    
    res.status(200).json({
      msg: result.rows[0].family_name + ' has been created'
    })
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