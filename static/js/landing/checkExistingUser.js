let timeoutId;

/*If "visitedFP" is true, the user 
has previously visited app and is redirected
to token authentication. Else a landing screen displays
for 5 seconds before redirecting to login. The user can
also trigger the redirect process at anytime with a button*/
const checkExistingUser = (redirect, btn) => {
  const checkVisited = localStorage.getItem('visitedFP')
  if (checkVisited) {
    redirect()
  } else {
    timeoutId = setTimeout(() => {
      redirect()
    }, 5000)

    localStorage.setItem('visitedFP', true)
    btn.addEventListener('click', () => {
      clearTimeout(timeoutId)
      redirect()
    })
  }
}

export default checkExistingUser