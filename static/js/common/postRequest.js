import { host } from '../../global.js'

const postRequest = async (body, url, token) => {
  const res = await fetch(host + url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST',
    body: JSON.stringify(body)
  })

  const resData = await res.json()
  return resData
}

export default postRequest