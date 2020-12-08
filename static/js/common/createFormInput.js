/*
This function accepts an array of objects and
a form to create linked inputs and labels.
*/

/*Object structure
  id: input id, label for attribute,
  name: input name,
  type: input type,
  label: label text
*/

const createFormInput = (inputs, form) => {
  for(let i of inputs) {
    const label = document.createElement('label')
    const labelText = document.createTextNode(i.label)
    label.appendChild(labelText)
    label.setAttribute('for', i.id)
    const input = document.createElement('input')
    input.setAttribute('type', i.type)
    input.setAttribute('name', i.name)
    input.id = i.id
    form.appendChild(label)
    form.appendChild(input)
  }
}

export default createFormInput