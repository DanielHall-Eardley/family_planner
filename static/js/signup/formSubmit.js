import postRequest from '../common/postRequest.js'

/*Submit the signup form for profile creation and
display an onscreen notification of success*/
const formSubmit = async (signupType, state) => {
  const url = '/account/signup/' + signupType
  const body = state.getCurrentState()
  console.log(body)
  const response = await postRequest(body, url)
  console.log(response)
  //update dom with success message
}

export default formSubmit