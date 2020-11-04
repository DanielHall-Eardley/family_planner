const alert = require('./tables/alert')
const family_member = require('./tables/family_member')
const family = require('./tables/family')
const ingredient = require('./tables/ingredient')
const meal = require('./tables/meal')
const rec_event = require('./tables/rec_event')
const step = require('./tables/step')
const ing_list = require('./tables/ing_list')
const meal_step = require('./tables/meal_step')
const member = require('./tables/member')
const uuid = 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'

module.exports = [
  ingredient,
  step,
  family,
  rec_event,
  alert,
  member,
  meal,
  ing_list,
  meal_step,
  family_member,
]