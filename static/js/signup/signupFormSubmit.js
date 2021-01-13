import postRequest from '../common/postRequest.js'
import appendProfileForm from './appendProfileForm'

/*Submit the signup form for profile creation and
display an onscreen notification if an error occurs. 
Use javascript to create the profile creation form so 
its can be displayed as soon as confirmation of 
family creation has been recieved*/
const signupFormSubmit = async (signupType, state) => {
  const url = '/account/signup/' + signupType
  const body = state.getCurrentState()
  const response = await postRequest(body, url)
  console.log(response)
  localStorage.setItem('familyId', response.familyId)
  appendProfileForm()
}

export default signupFormSubmit