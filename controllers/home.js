const db = require('../db')
const { formatISO } = require('date-fns')

const getHome = async (req, res, next) => {
  try {
    const now = formatISO(new Date())
    const familyMemberId = req.params.id
    const parameters = [familyMemberId, now]
    const alertQuery = `
      SELECT * FROM alert
    `
    
    const mealQuery = `
      SELECT * FROM meal
    `

    const statusQuery = `
      SELECT * FROM family_member
    `

    const [
      alerts,
      meal,
      familyStatus
    ] = await Promise.all([
      db.query(alertQuery, parameters),
      db.query(mealQuery, parameters),
      db.query(statusQuery, parameters)
    ])

    const data = {
      host: require('../global').host,
      alerts,
      meal,
      familyStatus,
      section: 'home'
    }
  
    res.render('./home/index', data)
  } catch (error) {
    next (error)
  }
}

module.exports = {
  getHome
}