import postRequest from '../common/postRequest'
import { host } from '../../../global'

const profileFormSubmit = async (state) => {
  const url = '/account/profile/create'
  const body = {
    familyId: localStorage.getItem('familyId'),
    ...state.getCurrentState()
  }

  const response = await postRequest(body, url)
  localStorage.removeItem('familyId')
  localStorage.setItem('token', response.token)
  window.location.href = host + '/home'
}

export default profileFormSubmit