const db = require('../db')
const { host } = require('../global')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getLogin = async (req, res, next) => {
  try {
    const data = {
      host
    }

    res.render('./account/login.ejs', data)
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
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    if (!hashedPassword) {
      throw new Error ('Unable to create password')
    }

    const randomFamilyCode = Math.floor(100000 + Math.random() * 900000)

    const queryText = `INSERT INTO family(
      family_name,
      family_password
      family_code
    ) VALUES (
      $1,
      $2,
      $3
    ) RETURNING family.family_name, family.family_id`

    const params = [req.body.lastName, hashedPassword, randomFamilyCode]
    const result = await db.query(queryText, params)
    
    res.status(200).json({
      msg: result.rows[0].family_name + ' has been created',
      familyId: result.rows[0].family_id
    })
  } catch (error) {
    next(error)
  }
}

const joinFamily = async (req, res, next) => {
  try {
    /*need to generate a unique six digit code
    on family creation to uniquely identify the family
    for other members to join*/
  } catch (error) {
    next(error)
  }
}

const createFamilyMember = async (req, res, next) => {
  try {
    const params = [
      req.body.email,
      req.body.dateOfBirth,
      req.body.familyId,
      req.body.firstName,
      req.body.relationship
    ]

    const queryText = `
      INSERT INTO family_member AS fm (
        email,
        birth_date,
        family_id,
        first_name,
        relation_type
      ) VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
      ) RETURNING fm.family_id, fm.family_member_id
    `
    
    const result = await db.query(queryText, params)
    console.log(result)
    const payload = {
      familyId: result.rows[0].family_id,
      familyMemberId: result.rows[0].family_member_id
    }

    const token = await jwt.sign(payload, process.env.SECRET, {expiresIn: '7d'})

    res.status(200).json({
      token
    })
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
  createFamily,
  createFamilyMember
}