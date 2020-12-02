import checkExistingUser from '../static/js/landing/checkExistingUser.js'

let mockRedirect;

beforeEach(() => {
  mockRedirect = jest.fn()
  jest.useFakeTimers()
})

const mockBtn = document.createElement('button')
mockBtn.className = 'next-btn'

test("Redirects a new user after 5 seconds", () => {
  localStorage.clear()
  checkExistingUser(mockRedirect, mockBtn)

  expect(mockRedirect).not.toBeCalled()
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)

  jest.runAllTimers()

  expect(mockRedirect).toHaveBeenCalledTimes(1)
  expect(localStorage.getItem('visitedFP')).toBeTruthy()
})

test("Redirects an existing user immediately", () => {
  checkExistingUser(mockRedirect, mockBtn)
  expect(mockRedirect).toHaveBeenCalledTimes(1)
})

test("Clears the redirect delay", () => {
  localStorage.clear()
  checkExistingUser(mockRedirect, mockBtn)

  expect(mockRedirect).not.toBeCalled()
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000)

  jest.advanceTimersByTime(1000)
  mockBtn.click()

  expect(clearTimeout).toBeCalled()
  expect(mockRedirect).toHaveBeenCalledTimes(1)
  expect(localStorage.getItem('visitedFP')).toBeTruthy()
})