import state from '../common/state.js'
import createBtn from '../common/createBtn.js'
import eventForm from './eventForm.js'

export const createEvent = () => {
  const main = document.querySelector('main')
  const form = document.createElement('form')
  form.className = 'create-event'
  form.appendChild(eventForm)
  main.appendChild(form)
}

window.onload = () => {
  createBtn(createEvent, document)
}

