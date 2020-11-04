const db = require('../db')
const { formatISO } = require('date-fns')

const getHome = async (req, res, next) => {
  try {
    const now = formatISO(new Date())
    const familyId = req.params.familyId

    const alertQuery = `
      SELECT * FROM alert
      WHERE alert.family_id = ${familyId} AND
      alert.alert_date = ${now}
    `
    
    const mealQuery = `
      SELECT * FROM meal as m
      INNER JOIN ing_list AS il
      ON m.meal_id = il.meal_id
      INNER JOIN ingredient as ing
      ON ing.ingredient_id = il.ingredient_id
      WHERE m.date = ${now} 
      AND m.family_id = ${familyId}
    `

    const statusQuery = `
      SELECT 
        m.member_name, 
        e.event_name,
        d.start,
        d.end 
      FROM family_member
      INNER JOIN member as m USING(member_id)
      INNER JOIN rec_event as e USING(member_id)
      INNER JOIN rec_event_date d USING(rec_event_id)
      WHERE family_member.family_id = ${familyId}
      AND d.start < ${now} 
      ANS d.end > ${now}
    `

    const [
      alerts,
      meal,
      familyStatus
    ] = await Promise.all([
      db.query(alertQuery),
      db.query(mealQuery),
      db.query(statusQuery)
    ])

    const data = {
      host: require('../global').host,
      alerts,
      meal,
      familyStatus,
      familyId,
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