const formListener = (event, state) => {
  const key = event.target.name
  const oldState = state.getCurrentState()
  
  const updatedState = {...oldState}
  updatedState[key] = event.target.value
  state.updateState(updatedState)
}

export default formListener