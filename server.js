const express = require('express')
const app = express()

const path = require('path')
const createTables = require('./table_array')
const db = require('./db')

const result = require('dotenv').config()
 
if (result.error) {
  throw result.error
}


// for (let table of createTables) {
//   db.query(table)
// }

const homeRoutes = require('./routes/home')
const eventRoutes = require('./routes/event')
const accountRoutes = require('./routes/account')
const getLanding = require('./controllers/landing')

app.set('view engine', 'ejs')
app.use(express.static('dist'))
app.use(express.static('css-dist'))
app.use(express.static('assets'))
app.use(express.json())
app.get('/', getLanding)
app.use('/account', accountRoutes)
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