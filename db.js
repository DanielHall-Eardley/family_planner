const { Pool } = require('pg')

const pool = new Pool()

module.exports = {
  async query(text, params) {
    try {
      const start = Date.now()
      const result = await pool.query(text, params)
      const duration = Date.now() - start
      console.log(`query ${text} completed in ${duration}, count ${result.rowCount}`)
      return result
    } catch (error) {
      console.log(error)
    }
  }
}