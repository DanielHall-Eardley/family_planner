const createFormBtn = (text, form) => {
  const submitBtn = document.createElement('button')
  submitBtn.className = 'form-submit'
  const submitBtnText = document.createTextNode(text)
  submitBtn.appendChild(submitBtnText)
  form.appendChild(submitBtn)
}

export default createFormBtn