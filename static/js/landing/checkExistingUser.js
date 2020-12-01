import redirect from './redirect'

let timeoutId;

const checkExistingUser = () => {
  const checkVisited = localStorage.getItem('visitedFP')
  if (checkVisited) {
    redirect()
  } else {
    timeoutId = setTimeout(() => {
      redirect()
    }, 5000)

    localStorage.setItem('visitedFP', true)
    const btn = document.querySelector('.next-btn')
    btn.addEventListener('click', () => {
      clearTimeout(timeoutId)
    })
  }
}

export default checkExistingUser