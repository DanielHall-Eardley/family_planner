import { host } from '../../../global.js'

const getRequestAuth = async (url, token) => {
  const response = await fetch(host + url, {
    headers: {
      'Authorization': token
    },
    method: 'GET',
  })

  const responseBody = await response.json()
  return responseBody
}

export default getRequestAuth