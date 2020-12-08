const createFormTitle = (text, form) => {
  const title = document.createElement('h3')
  title.className = 'form-title'
  const titleText = document.createTextNode(text)
  title.appendChild(titleText)
  form.appendChild(title)
}

export default createFormTitle