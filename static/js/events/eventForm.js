const eventForm = new DocumentFragment()

const createInput = (inputs, parent) => {
  for(let i of inputs) {
    const label = document.createElement('label')
    label.innerText = i.label
    label.setAttribute('for', i.id)
    const input = document.createElement('input')
    input.setAttribute('type', i.type)
    input.id = i.id
    parent.appendChild(label)
    parent.appendChild(input)
  }
}

const eventInputs = [
  {
    id: 'alert-title',
    name: 'title',
    type: 'text',
    label: 'Enter a name for your event'
  },
  {
    id: 'alert-date',
    name: 'date',
    type: 'date',
    label: 'Enter a date for your event'
  },
  {
    id: 'img-url',
    name: 'imgUrl',
    type: 'text',
    label: 'Link an image to your event'
  }
]

createInput(eventInputs, eventForm)
const select = document.createElement('select')
select.className = 'alert-type'
select.setAttribute('name', 'eventType')
const options = ['task', 'social']

for (let optName of options) {
  const option = document.createElement('option')
  option.innerText = optName
  select.appendChild(option)
}

const descLabel = document.createElement('label')
descLabel.setAttribute('for', 'alert-desc')
descLabel.innerText = 'Enter a brief description'

const typeLabel = document.createElement('label')
typeLabel.setAttribute('for', 'alert-type')
typeLabel.innerText = 'Choose type of event'

const textarea = document.createElement('textarea')
select.setAttribute('name', 'eventDescription')
textarea.id = 'alert-desc'

eventForm.appendChild(typeLabel)
eventForm.appendChild(select)
eventForm.appendChild(descLabel)
eventForm.appendChild(textarea)

export default eventForm
