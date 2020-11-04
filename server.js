const express = require('express')
const app = express()

const path = require('path')
const createTables = require('./table_array')

const result = require('dotenv').config()
 
if (result.error) {
  throw result.error
}


// for (let table of createTables) {
//   db.query(table)
// }

const homeRoutes = require('./routes/home')
const eventRoutes = require('./routes/event')

app.set('view engine', 'ejs')
app.use(express.static('dist'))
app.use(express.static('css-dist'))
app.use('/home', homeRoutes)
app.use('/events', eventRoutes)

app.use((error, req, res, next) => {
  const data = {
    host: require('./global').host,
    section: 'error',
    error
  }

  res.render('./common/error', data)
})

app.listen(3000)