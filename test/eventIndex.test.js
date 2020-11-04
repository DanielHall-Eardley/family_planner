import { createEvent } from '../static/js/events/index.js'

beforeAll(() => {
  const main = document.createElement('main')
  document.body.appendChild(main)
})

test('Event creation form matches snapshot', () => {
  createEvent()

  expect(document.querySelector('main')).toMatchSnapshot()
}) 
