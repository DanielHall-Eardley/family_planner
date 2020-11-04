const createBtn = (cb, document) => {
  const btn = document.querySelector('.create-btn')
  btn.addEventListener('click', cb)
  return btn
}

export default createBtn