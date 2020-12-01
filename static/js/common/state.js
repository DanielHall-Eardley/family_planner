export class FormState {
  constructor(state) {
    this.state = state || {}
  }

  updateState(newState) {
    this.state = newState
  }

  getCurrentState() {
    return this.state
  }
}

