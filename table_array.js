const alert = require('./tables/alert')
const family_member = require('./tables/family_member')
const family = require('./tables/family')
const ingredient = require('./tables/ingredient')
const meal = require('./tables/meal')
const rec_event = require('./tables/rec_event')
const rec_event_date = require('./tables/rec_event_date')
const meal_step = require('./tables/meal_step')
const shopping_list = require('./tables/shopping_list')
const store = require('./tables/store')
const order = require('./tables/order')
const takeaway = require('./tables/takeaway')
const uuid = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'

module.exports = [
  family,
  family_member,
  alert,
  takeaway,
  meal,
  rec_event,
  shopping_list,
  store,
  ingredient,
  meal_step,
  rec_event_date,
  order,
]