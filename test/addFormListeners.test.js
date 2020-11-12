import addFormListeners from '../static/js/common/addFormListeners'
import { FormState } from '../static/js/common/state'

let mockFormState;
let mockCb;

beforeEach(() => {
  mockFormState = new FormState()
  mockCb = jest.fn()
})

test('Event listeners are added to input elements', () => {
  const form = document.createElement('form')
  const input = document.createElement('input')
  const select = document.createElement('select')
  const textarea = document.createElement('textarea')
  
  form.appendChild(input)
  form.appendChild(select)
  form.appendChild(textarea)
  
  addFormListeners(form, mockCb, mockFormState)
  expect(mockCb).toHaveBeenNthCalledWith(3, mockFormState)
})

test('Event listeners are not added to any non-input elements', () => {
  const form = document.createElement('form')
  const label = document.createElement('label')
  const button = document.createElement('button')
  
  form.appendChild(label)
  form.appendChild(button)

  addFormListeners(form, mockCb, mockFormState)
  expect(mockCb).not.toBeCalled()
})