import redirect from '../static/js/landing/redirect.js'
import {host} from '../global.js'

Object.defineProperty(window, 'location', {
  writable: true,
  value: {
    replace(url) {
      this.href = url
    },
    href: ''
  }
})

beforeEach(() => {
  localStorage.clear()
})

test('Redirects to login when token is undefined', () => {
  redirect()

  expect(location.href).toBe(host + '/account/login')
})

test('Redirects to home when token is defined', () => {
  const token = '1234'
  localStorage.setItem('token', token)
  redirect()

  expect(location.href).toBe(`${host}/home?token=${token}`)
})