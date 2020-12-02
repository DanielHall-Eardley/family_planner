import { formState } from './index.js'
import formSubmit from './formSubmit.js'

/*Grab the signup btn innerText to determine if the user
is joining or creating a family. Use javascript to create 
the profile creation form and overlay it so the user 
can begin poulating the inputs as the server joins or
creates a family*/
const formCb = event => {
  event.preventDefault()
  const btn = document.querySelector('.signup-btn')
  const signupType = btn.innerText.toLowerCase()
  //profile creation form
  formSubmit(signupType, formState)
}

export default formCb