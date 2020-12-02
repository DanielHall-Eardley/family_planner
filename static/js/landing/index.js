import checkExistingUser from './checkExistingUser.js'
import redirect from './redirect'

window.onload = async () => {
  const btn = document.querySelector('.next-btn')

  checkExistingUser(redirect, btn)
}