import createBtn from '../common/createBtn.js'
import postRequestAuth from '../common/postRequestAuth.js'
import inputListener from '../common/inputListener'
import addFormListeners from '../common/addFormListeners'
import eventForm from './eventForm.js'

import { FormState } from '../common/state'
export const formState = new FormState()

/*
Create an event form with JavaScript,
add input and form submission event listeners
*/
export const createEvent = () => {
  const main = document.querySelector('main')
  const form = document.createElement('form')

  form.className = 'create-event'
  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const body = formState.getCurrentState()
    const url = '/events/create'
    const token = localStorage.getItem('token')
    const response = await postRequestAuth(body, url, token)
    console.log(response)
  })

  form.appendChild(eventForm)
  addFormListeners(form, inputListener, formState)
  main.appendChild(form)
}

/*Attach the form creation to a button*/
window.onload = () => {
  createBtn(createEvent, document)
}
