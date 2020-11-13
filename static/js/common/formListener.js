const formListener = (event, state) => {
  const key = event.target.name
  const value = event.target.value
  const oldState = state.getCurrentState()
  
  const updatedState = {...oldState}
  updatedState[key] = value
  state.updateState(updatedState)
}

export default formListener