import { formState } from './index.js'
import signupFormSubmit from './signupFormSubmit.js'

/*Grab the signup btn innerText to determine if the user
is joining or creating a family.*/
const signupFormCb = event => {
  event.preventDefault()
  const btn = document.querySelector('.signup-btn')
  const signupType = btn.innerText.toLowerCase()
  signupFormSubmit(signupType, formState)
}

export default signupFormCb