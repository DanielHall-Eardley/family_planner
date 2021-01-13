import checkForToken from './checkForToken.js'
import { host } from '../../../global.js'

/*This function redirects the user the login or
home page depending on the existence of a jwt token*/
const redirect = () => {
  const token = checkForToken()
  const checkForId = localStorage.getItem('familyId')
  if (token) {
    window.location.replace(`${host}/home?token=${token}`)
  } else if (checkForId) {
    window.location.replace(host + '/account/signup/create')
  } else {
    window.location.replace(host + '/account/login')
  }
}

export default redirect