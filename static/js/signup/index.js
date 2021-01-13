import inputListener from '../common/inputListener'
import addFormListeners from '../common/addFormListeners'
import signupFormCb from  './signupFormCb'

import { FormState } from '../common/state'
import appendProfileForm from './appendProfileForm'
export const formState = new FormState()

window.onload = () => {
  if (localStorage.getItem('familyId')) {
    appendProfileForm()
  } else {
    const form = document.querySelector('.signup-form')
    addFormListeners(form, inputListener, formState)
    form.addEventListener('submit', signupFormCb)
  }
}
