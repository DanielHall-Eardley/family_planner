/*
This function takes in a form, a callback and a state instance.
It iterates over all the form's children and adds event listeners
to all valid input elements.
*/

const addFormListeners = (form, cb, state) => {
  const children = form.children
  
  for(let child of children) {
    if (
      child.nodeName === 'INPUT' || 
      child.nodeName === 'SELECT' ||
      child.nodeName === 'TEXTAREA'
    ) {
      child.addEventListener('input', event => {
        cb(event, state)
      })
    }
  }
}

export default addFormListeners