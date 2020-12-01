/*
This is a called when an input changes and 
updates state using the key value pair of the
input's name and value.
*/

const inputListener = (event, state) => {
  const key = event.target.name
  const value = event.target.value
  const oldState = state.getCurrentState()
  
  const updatedState = {...oldState}
  updatedState[key] = value
  state.updateState(updatedState)
}

export default inputListener