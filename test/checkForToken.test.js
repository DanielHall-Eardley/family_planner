import checkForToken from '../static/js/landing/checkForToken.js'

beforeEach(() => {
  localStorage.clear()
})

test('function returns false when token is not present', () => {
  expect(checkForToken()).toBeNull()
})

test('function returns false when token is not present', () => {
  localStorage.setItem('token', '1234')

  expect(checkForToken()).toBeTruthy()
})