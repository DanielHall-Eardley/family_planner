import inputListener from '../common/inputListener'
import addFormListeners from '../common/addFormListeners'
import formCb from  './formCb'

import { FormState } from '../common/state'
export const formState = new FormState()

window.onload = () => {
  const form = document.querySelector('.signup-form')
  addFormListeners(form, inputListener, formState)

  form.addEventListener('submit', formCb)
}
