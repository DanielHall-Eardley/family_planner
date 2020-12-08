import postRequest from '../common/postRequest'
import { host } from '../../../global'

const profileFormSubmit = async (familyId, state) => {
  const url = '/account/profile/create'
  const body = {
    familyId,
    ...state.getCurrentState()
  }

  const response = await postRequest(body, url)
  localStorage.setItem('token', response.token)
  window.location.href = host + '/home'
}

export default profileFormSubmit