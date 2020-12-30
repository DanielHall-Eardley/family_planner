import profileFormSubmit from '../static/js/signup/profileFormSubmit'
import { FormState } from '../static/js/common/state'
const postRequest = jest.mock('../static/js/common/postRequest')

const formState = new FormState({data: 'A data field'})

test('Api request is called with expected arguments', () => {
  profileFormSubmit(1, formState)
  const body = {
    familyId: 1,
    ...formState.getCurrentState()
  }

  expect(postRequest).toBeCalledWith(body, '/account/profile/create')
})