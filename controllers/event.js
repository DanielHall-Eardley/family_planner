const db = require('../db')
const { host } = require('../global')

const getCalender = async (req, res, next) => {
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
  getCalender
}