import createFormTitle from '../static/js/common/createFormTitle'

test('A title is added to the form', () => {
  const form = document.createElement('form')
  const text = 'Title'

  createFormTitle(text, form)
  const title = form.children[0]
  expect(title.className).toBe('form-title')
  expect(title.innerHTML).toBe(text)
})