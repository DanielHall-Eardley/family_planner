import formListener from '../static/js/common/formListener'
import { FormState } from '../static/js/common/state'

test('Add key value pair in empty state', () => {
  const state = new FormState()
  const event = {
    target: {
      value: 'value',
      name: 'key'
    }
  }

  formListener(event, state)
  expect(state.getCurrentState()).toEqual({ key: 'value' })
})

test('Add key value pair in state', () => {
  const state = new FormState({ existingKey: 'existingValue' })
  const event = {
    target: {
      value: 'value',
      name: 'key'
    }
  }

  formListener(event, state)
  expect(state.getCurrentState()).toEqual({ key: 'value', existingKey: 'existingValue' })
})

test('Update key value pair in state', () => {
  const state = new FormState({existingKey: 'existingValue'})
  const event = {
    target: {
      value: 'newValue',
      name: 'existingKey'
    }
  }

  formListener(event, state)
  expect(state.getCurrentState()).toEqual({ existingKey: 'newValue'})
})