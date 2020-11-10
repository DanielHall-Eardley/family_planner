export class FormState {
  constructor() {
    this.state = {}
  }

  updateState(newState) {
    this.state = newState
  }

  getCurrentState() {
    return this.state
  }
}

