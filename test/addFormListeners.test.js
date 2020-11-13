import addFormListeners from '../static/js/common/addFormListeners'
import { FormState } from '../static/js/common/state'

let mockFormState;
let mockCb;

beforeEach(() => {
  mockFormState = new FormState()
  mockCb = jest.fn()
})

test('Event listeners are added to input elements', () => {
  const mockForm = {
    children: [
      {
        nodeName: 'INPUT',
        addEventListener: jest.fn()
      },
      {
        nodeName: 'SELECT',
        addEventListener: jest.fn()
      },
      {
        nodeName: 'TEXTAREA',
        addEventListener: jest.fn()
      },
    ]
  }
  
  addFormListeners(mockForm, mockCb, mockFormState)
  expect(mockForm.children[0].addEventListener).toHaveBeenCalledTimes(1)
  expect(mockForm.children[1].addEventListener).toHaveBeenCalledTimes(1)
  expect(mockForm.children[2].addEventListener).toHaveBeenCalledTimes(1)
})

test('Event listeners are not added to any non-input elements', () => {
  const mockForm = {
    children: [
      {
        nodeName: 'BUTTON',
        addEventListener: jest.fn()
      },
      {
        nodeName: 'H1',
        addEventListener: jest.fn()
      },
      {
        nodeName: 'DIV',
        addEventListener: jest.fn()
      },
    ]
  }

  addFormListeners(mockForm, mockCb, mockFormState)
  expect(mockForm.children[0].addEventListener).not.toBeCalled()
  expect(mockForm.children[1].addEventListener).not.toBeCalled()
  expect(mockForm.children[2].addEventListener).not.toBeCalled()
})