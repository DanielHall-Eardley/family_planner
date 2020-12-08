import profileCreationForm from './profileCreationForm'
import inputListener from '../common/inputListener'
import addFormListeners from '../common/addFormListeners'
import profileFormSubmit from './profileFormSubmit'

import { FormState } from '../common/state'
export const formState = new FormState()

const appendProfileForm = (familyId) => {
  const signupForm = document.querySelector('.signup-form')
  const newForm = document.createElement('form')
  newForm.className = 'profile-form'
  newForm.appendChild(profileCreationForm)
  signupForm.replaceWith(newForm)
  addFormListeners(newForm, inputListener, formState)

  newForm.addEventListener('submit', (event) => {
    event.preventDefault()
    profileFormSubmit(familyId, formState)
  })
}

export default appendProfileForm