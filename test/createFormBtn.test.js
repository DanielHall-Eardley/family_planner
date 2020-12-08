import createFormBtn from '../static/js/common/createFormBtn'

test('A submit button is added to the form', () => {
  const form = document.createElement('form')
  const text = 'Submit'

  createFormBtn(text, form)
  const btn = form.children[0]
  expect(btn.className).toBe('form-submit')
  expect(btn.innerHTML).toBe(text)
})