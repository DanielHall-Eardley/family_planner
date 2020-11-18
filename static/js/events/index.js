import createBtn from '../common/createBtn.js'
import postRequest from '../common/postRequest.js'
import formListener from '../common/formListener'
import addFormListeners from '../common/addFormListeners'
import eventForm from './eventForm.js'

import { FormState } from '../common/state'
export const formState = new FormState()

export const createEvent = () => {
  const main = document.querySelector('main')
  const form = document.createElement('form')

  form.className = 'create-event'
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const body = formState.getCurrentState()
    const url = '/events/create'
    const token = localStorage.getItem('token')
    const response = await postRequest(body, url, token)
    console.log(response)
  })

  form.appendChild(eventForm)
  addFormListeners(form, formListener, formState)
  main.appendChild(form)
}

window.onload = () => {
  createBtn(createEvent, document)
}
