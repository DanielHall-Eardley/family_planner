import checkForToken from './checkForToken.js'
import { host } from '../../../global.js'

/*This function redirects the user the login or
home page depending on the existence of a jwt token*/
const redirect = () => {
  const token = checkForToken()
  if (token) {
    window.location.replace(`${host}/home?token=${token}`)
  } else {
    window.location.replace(host + '/account/login')
    console.log(location.href)
  }
}

export default redirect