import createFormInput from '../static/js/common/createFormInput'

const form = document.createElement('form')
const formInputs = [
  {
    id: 'alert-title',
    name: 'title',
    type: 'text',
    label: 'Enter a name for your event'
  },
  {
    id: 'alert-date',
    name: 'date',
    type: 'date',
    label: 'Enter a date for your event'
  }
]

test('Inputs and corresponding labels are added to form', () => {
  createFormInput(formInputs, form)

  const label1 = form.children[0]
  const input1 = form.children[1]
  const label2 = form.children[2]
  const input2 = form.children[3]

  expect(label1.getAttribute('for')).toBe(formInputs[0].id)
  expect(label1.innerHTML).toBe(formInputs[0].label)
  expect(input1.getAttribute('id')).toBe(formInputs[0].id)
  expect(input1.getAttribute('name')).toBe(formInputs[0].name)
  expect(input1.getAttribute('type')).toBe(formInputs[0].type)

  expect(label2.getAttribute('for')).toBe(formInputs[1].id)
  expect(label2.innerHTML).toBe(formInputs[1].label)
  expect(input2.getAttribute('id')).toBe(formInputs[1].id)
  expect(input2.getAttribute('name')).toBe(formInputs[1].name)
  expect(input2.getAttribute('type')).toBe(formInputs[1].type)
})